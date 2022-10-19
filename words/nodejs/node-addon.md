# Node.js 扩展

## 前言

本文将简单介绍 node.js 的扩展（C++ addons），并实现一个 nan 版的 hello-world 扩展

## 扩展的实现方式

按照官方文档 [C++ addons](https://nodejs.org/api/addons.html) 的描述，有三种方式来实现扩展：

- Node-API
- nan
- 直接使用 node.js 内部 re-exported 的模块，比如：libuv, OpenSSL, V8 and zlib

### 相同点

Node-API 和 nan 都是对 node.js 内部模块的封装，目的是为了让扩展的编写者可以较为轻松的应对底层 API 的兼容性问题：

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7720626698/8477/e7b3/c62e/275c85fdad05fc2530b42e05b3c26c6b.png)

### 不同点

Node-API 和 nan 的不同点在于：

- Node-API 使用 C 来提供 API，这样方便其他运行环境进行接入。而 nan 是 C++ 的 API，因此其他环境接入时，在没有出现 Node-API 之前，都需要先用 C 将 C++ 的 API 封装一遍（主要因为 C++ 的 [name mangling](https://en.wikipedia.org/wiki/Name_mangling) 和 C 的不一样，而 C 被其他运行环境的支持度更高）
- 两者的另外一点不同在于，Node-API 和 nan 提供的 API 集合是不同的。上面已经提到过，API 抽象层的目的就是为了解决兼容性问题，而 Node-API 的 API 集合作为 nan 的子集来说，具有更高的稳定性。这里的稳定性只是在各个版本之间保持一致的行为。哪些 API 可以从 nan 加入到 Node-API，是受制于底层模块的 API 的稳定性的，只有那些底层模块几乎不会变更（或者细微变更可以在 Node-API 做 polyfill）的，才会加入到 Node-API 中

## 如何选择

具体如何选择 Node-API 还是 nan，需要根据我们的扩展类型来确定

大部分情况下，扩展的目的是为了弥补 JS 在 CPU 密集型任务上的不足，这些扩展基本上只是往 JS 环境注入一个（或多个）方法，接收一些参数，然后内部处理后，再将处理结果通过回调或者 Promise 返回给 JS 环境。这样的情况基本使用 Node-API 就足够了（与 nan 不同，为了符合其稳定的使命，使用 Node-API 方式，将只能使用 Node-API 提供的 API）

而某些情况，比如需要编写获取应用运行时状态的，也就是需要和运行时深度交互的，这样的扩展就需要使用 nan 的方式（或者当某些 API 没有抽象到 nan，则直接使用 re-exported 的模块）

## Hello World

为了方便大家编写扩展时可以有参照物，官方准备了 [node-addon-examples](https://github.com/nodejs/node-addon-examples)。我们的 hello-world 就是基于它 [这里](https://github.com/nodejs/node-addon-examples/tree/main/1_hello_world/nan) 的实现

我们将使用 VSCode 进行开发，首先需要安装 [VSCode C/C++ Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

这里默认大家已经配置好基本的 C/C++ 开发环境，如果没有的话，请参考 [Using C++ in VS Code](https://code.visualstudio.com/docs/cpp/)（如果没有按平台跳转，需要手动选择左侧菜单）

我们直接把 [这里](https://github.com/nodejs/node-addon-examples/tree/main/1_hello_world/nan) 的代码按文件拷贝到本地目录后，还需要做一些微调，让开发更有体验。如果觉得麻烦，也可以直接克隆这个[仓库](https://github.com/hsiaosiyuan0/node_addon_hello)

### 设置 VSCode C/C++ 扩展

首先设定一下 VSCode C/C++ 扩展的头文件搜索路径，这样可以方便补全和查看定义

可以按下面的步骤进行设定：

1. 打开 `hello.cc` 文件，此时文件头部应该会提示找不到头文件：

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7721734954/292f/8d9e/efc4/c7de1eb31d87b70dd781a35f1265e1f7.png" width="500" />

2. 将光标定位到第一行，此时会出现黄色的感叹号:

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7721774157/a600/ee82/d57b/fc7f1fbc7c1c364b7a58451b2a137019.png" width="500" />

3. 点击黄色感叹号，我们可以选择 「Add to ...」或者「Edit "includePath" setting」

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7721782714/80ea/86e2/4c8a/799c9f2a14b362d0c76d6647fe4eabb1.png" width="500" />

如果没有出现「Add to ...」，则选择「Edit "includePath" setting」，然后将命令：

```bash
echo `which node` | sed 's=bin/node$=include/node='
```

的运行结果粘贴到下一步提到的位置中

4. 点击上一步的选项后，会在根目录下生成 `.vscode/c_cpp_properties.json` 文件，后续我们可以把未能自动识别的头文件路径加入到其中的 `includePath` 部分：

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7721921161/dad7/c390/925a/67ec616dc19db2e9c6c4100338d299f3.png" width="500" />

5. 编译好后保存该文件，插件内部经过短暂的构建索引之后，我们就可以在源码中查看方法的定义了

## 设置代码风格

可以在项目根目录下创建一个 `.clang-format` 文件，然后将下面的内容粘贴进去：

```json
BasedOnStyle: Google
```

这样我们格式化代码的时候，就可以应用 Google 的 CPP 代码风格了，更多的风格可以在这里找到 [Configurable Format Style Options](https://clang.llvm.org/docs/ClangFormatStyleOptions.html#configurable-format-style-options)

## 增加几个命令

我们还需要在 package.json 中增加几个命令：

```json
{
  "scripts": {
    "configure": "node-gyp configure",
    "build": "node-gyp build",
    "rebuild": "node-gyp rebuild",
  }
}
```

这些其实都是 `node-gyp` 的命令，更多常用命令可以在 [这里](https://www.npmjs.com/package/node-gyp#commands) 找到

## 运行

最后我们通过下面的命令来运行插件：

```bash
npm i
npm run build
node hello.js
```

后续我们修改 C++ 文件后，只需要运行：

```bash
npm run build
node hello.js
```
