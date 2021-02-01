---
path: "/react-memo"
title: '如何使用React.memo'
date: 2020-07-11
---

# 使用React.memo提高组件的性能

## 渲染
渲染指的就是一个更新DOM的过程。VirtualDOM出现之前，使用innerHTML；VirtualDOM出现之后，配合高效的Diff算法，以最小的代价更新DOM。

### 渲染何时触发
1. 组件挂载
   ReactDOM.render()
2. setState
   执行setState会触发render
3. 父组件重新渲染
   只要父组件渲染了，即使传入子组件的props没有改变，也会触发子组件的render

### 避免不必要的渲染
1. 非函数组件：使用shouldComponentUpdate 或者 PureComponent写组件
2. 函数组件：使用React.memo

## React.memo
React.memo是React16.6引入的，用来解决函数式组件不必要渲染的问题。

