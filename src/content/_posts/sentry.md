---
path: "/sentry"
title: 'sentry'
date: 2020-07-16
---

# Sentry在项目中的应用

## 引入监控模块
官方文档上说的比较清楚了，现在项目中引入如下代码：

```js
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: 'https://<key>@<organization>.ingest.sentry.io/<project>' });
```
这样sentry的环境就ok了，我们可以在代码中用sentry捕获错误了。

