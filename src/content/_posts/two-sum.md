---
path: "/two-sum"
title: 'Leetcode两数之和'
date: 2020-07-06
banner: image/kunsun.jpg
---

两数之和是一个最基础的算法，今天由浅入深的分析下这个问题。

## 1.0 基础版
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


### 示例:
```log
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

### 思路
第一种思路，典型的双循环，每个元素都与其他元素进行一个组合，找到第一个符合条件的。

第二种思路，一次遍历，使用一个map存储，key为数组的值，value为索引。当遍历到某个元素时，查看对应的值是否存在，如果存在，则返回。

### 解答
```jsx
function twoSum(nums, target) {
  let map = {};
  for(let i=0; i<nums.length; i++) {
    const key = target - nums[i];
    const element = nums[i];
    if (map[element] === undefined) {
      map[key] = i;
    } else {
      return [map[element], i];
    }
  }
}
```

## 2.0 进阶版

给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

### 说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

### 示例:

```log
输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
```

### 思路：
一、