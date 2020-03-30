---
title: 热更新
order: 10
---

OMG支持启动React的热更新配置。在`omg.config.js`中对`devServer.hot`设置为`true`，即可启动热更新。

> 目前OMG的`examples`中，使用的react版本为16.12.0，如果开启热更新后发现项目无法正常热更新，那么请升级react或者关闭热更新。

开启热更新后，OMG为了能让样式修改也能触发热更新，会将样式从原来的抽出css引入方式改为style内联的方式进行使用。

例子：

在根组件中进行使用。

```js
import React from 'react';
import { hot } from 'react-hot-loader';
import '../style/index.scss';
const App = () => (
  <h1>
    Hello, world.<br />
  </h1>
);

export default hot(module)(App);
```