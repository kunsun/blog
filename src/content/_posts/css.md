---
path: "/css"
title: 'CSS知识点'
date: 2021-02-02
tags:
  - CSS
---

默认 box-sizing: content-box;  计算content
box-sizing: border-box;  计算border+padding+content

## BFC / Block Formatting Context
一个BFC是一个独立容器，决定了元素如何对其内容进行定位，以及与其他元素的关系与相互作用。
相关链接：https://tech.youzan.com/css-margin-collapse/

BFC如何定位：
1. 内部的Box会垂直一个接一个放置
2. Box垂直方向的距离有margin决定，属于同一个BFC的两个相邻的（没有被padding、border、clear和line box分隔开）盒子（可能是父子元素，也可能是兄弟元素）margin会发生重叠
3. BFC的区域不会与float Box重叠
4. BFC是页面上的独立容器，容器里面的元素不会在布局上影响到外面的元素
5. 生成BFC的元素不会和在流中的子元素发生空白边折叠
6. BFC高度包含浮动元素
7. 处于同一个BFC中的元素相互影响，可能会发生margin collapse
8. 浮动盒的区域不会叠加到BFC上

满足一个条件即可触发BFC：
1. html根元素
2. float的值不为none
3. overflow的值不为visible
4. display的值为inline-block, table-cell, table-caption
5. position的值为absolute或fixed

经典问题：
1. 高度坍塌， margin重叠


## CSS3 新特性
1. border-image
2. linear-gradient
3. transition
4. flex

## Flexbox
flex布局

## 一些兼容性问题
1. Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。

## display:none与visibility:hidden的区别
display : none 隐藏对应的元素，在文档布局中不再分配空间（回流+重绘）
visibility:hidden 隐藏对应的元素，在文档布局中仍保留原来的空间（重绘）

## 浮动元素
浮动定位不属于正常的页面流

浮动带来的问题：
1. 父元素的高度无法被撑开，影响与父元素同级的元素
2. 与浮动元素同级的非浮动元素（内联元素）会跟随其后
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

清除浮动的方式：
1. 父级div定义height（不推荐）
2. 最后一个浮动元素后加空div，添加样式clear:both（不推荐）
3. 用伪元素after清除（推荐）
4. 包含浮动元素的父标签添加样式overflow不为visible（推荐，但注意position带来的问题）
5. 父级div定义zoom（IE8以下）

## 上下margin重合问题
W3C文章：https://www.w3.org/TR/CSS2/box.html#collapsing-margins
如何避免外边距叠加：
1. 浮动元素不会与任何元素发生叠加，也包括它的子元素
2. 创建了BFC的元素不会和它的子元素发生外边距叠加
3. 绝对定位元素和其他任何元素之间不发生外边距叠加，也包括它的子元素
4. inline-block元素和其他任何元素之间不发生外边距叠加，也包括它的子元素
5. 普通流中的块级元素的margin-bottom永远和它相邻的下一个块级元素的margin-top叠加，除非相邻的兄弟元素clear
6. 普通流中的块级元素（没有border-top、没有padding-top）的margin-top和它的第一个普通流中的子元素（没有clear）发生margin-top叠加
7. 普通流中的块级元素（height为auto、min-height为0、没有border-bottom、没有padding-bottom）和它的最后一个普通流中的子元素（没有自身发生margin叠加或clear）发生margin-bottom叠加
8. 如果一个元素的min-height为0、没有border、没有padding、高度为0或者auto、不包含子元素，那么它自身的外边距会发生叠加

## 响应式设计
```html
   <meta name=’viewport’ content=”width=device-width, initial-scale=1. maximum-scale=1,user-scalable=no”>
```
## line-height
两行文字间基线的距离。
经典：多行文本垂直局中

## Chrome支持小于12px的文字
chrome中可以直接设置
```css
p{
    font-size:10px;
    -webkit-transform:scale(0.8);//0.8是缩放比例
} 
```

## 消除inline-block元素间的换行符空格间隙
1. 用letter-spacing
2. font-size 

## inline-block
不换行，不可以设置大小，大小又内容决定

## 3栏布局
1. column
2. 左右float，中间控制margin
3. 左右float+margin,中间BFC，因为BFC区域不会与浮动元素重叠
4. 全部float left
5. table布局，但无法设置栏间距离
6. 绝对定位

## Flex布局
前端客栈知乎专栏：https://zhuanlan.zhihu.com/p/25070186
1. flex-bisic: 设置子项的占用空间
1. flex-grow: flex item的拉伸因子，用来“瓜分”父项的“剩余空间”
2. flex-shrink: 指定了flex元素的收缩规则

flex-grow与flex-shrink正好相对
flex-grow的计算方法
flex-shrink的计算方法

## <!DOCTYPE html>的作用
告诉解析器，应该使用什么样的文档类型解析文档

## 解决img图片自带边距的问题
1. 转换为block
2. 给img定义vertical-align
3. 父容器的font-size设为0
4. 父容器设置与图片一样高