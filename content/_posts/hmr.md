---
path: "/hmr"
title: '热更新 Hot Module Replacement'
date: 2021-02-02
tags:
  - Webpack
---

1. 不刷新浏览器
2. 不进行IO操作，放在内存中
3. webpack中配合HotModuleReplacementPlugin插件

也可以用webpack-dev-middleware，更加灵活


参考文章：
https://zhuanlan.zhihu.com/p/30669007
https://juejin.im/post/5de0cfe46fb9a071665d3df0

## 关键角色
1. webpack-dev-server: 
2. websocket:
3. 浏览器：


## 过程：
1. 监听文件变化，打包文件
2. webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监控，并且告诉 webpack，将代码打包到内存中
3. webpack-dev-server 对文件变化的监控
4. 用websocket传递给浏览器一个更新后信息，包括的hash值
5. 浏览器再把信息传递给server，server决定刷新方式，如果是hmr不是live reload,则往下走
6. 浏览器有个runtime文件，向server发送hash，server返回json，包括所有要更新的模块




## 官方描述
### App中
1. App要求HMR runtime 检查更新
2. HMR runtime异步下载更新，然后通知App
3. App 要求HMR runtime更新
4. HMR runtime同步地应用更新

### 在compiler中
除了普通资源，compiler 需要发出 "update"，将之前的版本更新到新的版本。"update" 由两部分组成：
1. 更新后的 manifest (JSON)
   1. manifest 包括新的 compilation hash 和所有的 updated chunk 列表
      1. 每个 chunk 都包含着全部更新模块的最新代码
2. 一个或多个 updated chunk (JavaScript)




## 原理分析
WDS：webpack-dev-server, 作为server端
1. Webpack compile
2. HMR server
3. Bundle server

Browser：浏览器端 bundle.js
1. HMR Runtime
2. your js code

作用：
1. webpack compile： 将JS编译成Bundle 
2. HMR server：将热更新的文件传递给HMR Runtime
3. Bundle server: 提供文件在浏览器访问
4. HMR Runtime：注入到浏览器，更新文件变化，通知给HMR server
5. bundle.js: 构建输出文件


