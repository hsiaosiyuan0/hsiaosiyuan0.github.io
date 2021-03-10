## 前言

从源码分析的第一步，就是准备好开发环境。官方有比较完整的 [如果贡献指引](https://reactjs.org/docs/how-to-contribute.html)，文本将参考其中的内容进行整理

## 准备源码

首先将 React 的 [源码](https://github.com/facebook/react) 克隆至本地

然后切换到最近的 Release 分支 `17.0.1`

然后在项目根目录下运行 `yarn` 完成依赖的安装

## 构建方式

如果直接在根目录下运行 `yarn build` 会构建所有 `packages/` 下面的包，这个时间一般都会很久。因为只是为了学习源码，我们可以通过下面的命令让编译快一些：

```bash
yarn build react/index,react/jsx,react-dom/index,scheduler --type=umd_dev --watch
```

上面的命令中，我们设定只输出 UMD 的产物。咋一看有违直觉，因为目前大部分项目中，都是输出 ES module 然后再经过打包工具（比如 webpack）处理

如果我们这里选择输出成 ES module，那么我们还需要配置演示项目的打包环节，并且我们还需要按照这里的 [步骤](https://reactjs.org/docs/how-to-contribute.html#development-workflow) 链接本地模块 `yarn link`

而使用 UMD 模块的方式，我们只需要准备一个简单的 HTML 页面，并在页面中使用本地构建的 UMD 模块就可以了

## 创建演示项目

我们直接在 React 源码更目录下创建文件 `demo/index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <script src="../build/node_modules/react/umd/react.development.js"></script>
  <script
    src="../build/node_modules/react-dom/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
  const Hello = function (props) {
    return <div onClick={() => {
      alert(1)
    }}>Hello workd</div>;
  }

  ReactDOM.render(<Hello/>, document.getElementById('app'));
</script>
</body>
</html>
```

我们可以直接在 WebStorm 内置的 Web Server 打开该文件：

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7748817416/7ce7/80e5/ac1f/7e580e6b95ee29c238f1a458af59753b.png)

或者直接在 `demo` 目录下运行：

```bash
ln -s ../build build # svrx 只能从在启动目录下查找资源
npx svrx .
```

## 测试

为了测试我们已经把环境配置好，先修改 React 源码在增加一个日志输出：

```js
// packages/react-dom/src/client/ReactDOMLegacy.js
export function render(
  element: React$Element<any>,
  container: Container,
  callback: ?Function
) {
  console.log("hello from source");
  // ...
}
```

然后我们编译 React 源码：

```bash
yarn build react/index,react/jsx,react-dom/index,scheduler --type=umd_dev --watch
```

使用 [svrx](https://github.com/svrxjs/svrx) 在 `demo` 目录下运行一个 Web 服务：

```bash
ln -s ../build build # svrx 只能从在启动目录下查找资源
npx svrx .
```

不出意外的话，我们会在浏览器的控制台中看到 `hello from source` 的输出
