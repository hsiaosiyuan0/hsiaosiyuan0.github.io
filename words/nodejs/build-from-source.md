# 从源码构建 node.js

## 前言

本文将介绍如何从源码构建 node.js

## 克隆仓库

首先是将 [node](https://github.com/nodejs/node) 源码克隆到本地，然后按照当前的学习进度，选择 `v14.x` 分支

## 准备构建环境

为了避免麻烦，构建优先选择 `*nix` 环境，这样大部分情况下，环境应该是默认可用的，比如 Ubuntu 上已经安装了 `build-essential`（apt install build-essential），和 macos 上已经安装了 Xcode

如果这部分没有准备好，或者遇到问题，可以参考 [building-nodejs-on-supported-platforms](https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-on-supported-platforms)

## 配置缓存

因为是以学习源码的目的来从源码编译，所以后续一定会有频繁编译的情况，那么就需要先配置 `ccache` 来为后续的编译开启缓存，在没有缓存的情况下，通常一次编译**至少需要 30 分钟**的时间

如果是 macos 上，通过 `brew install ccache` 来安装 `ccache`

安装好之后，在 `~/.bash_profile` 文件中加入下面的配置，如果使用的 zsh 则是 `~/zshrc`：

```bash
mkdir /var/tmp/ccache 2>/dev/null
ccache -o cache_dir=/var/tmp/ccache

# 大小根据当前可用磁盘空间酌情而定
ccache -o max_size=30.0G

# 对于 Linux 系统，使用下面的设定
export CC="ccache gcc"
export CXX="ccache g++"

# 官方没有说明的是，对于 macos，需要使用下面的设定
export CC="ccache cc"
export CXX="ccache c++"
```

## 编译源码

在源码根目录下面运行下面的命令：

```bash
# 注意根据自身硬件和系统条件设置并行构建任务数，下面命令使用 `-j16` 表示运行 16 个并行构建任务
./configure --debug && make -j16
```

更多环节可以参考 [Building Node.js](https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-on-supported-platforms)
