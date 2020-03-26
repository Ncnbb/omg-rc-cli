---
title: JavaScript注入文档
order: 8
---

# JavaScript注入文档

在某些情况下，例如我们需要将统计埋点或者rem的计算代码前置在head当中，并且代码采用的是内联的方式注入的html，那么在`OMG`中也是支持html注入js代码到你想要的位置。

omg.config.js

```js
{
    entry: {
        tj: 'xxxxxx?__inline',
    },
    ...
}
```

在`omg.config.js`中配置一个自定义的entey指向你需要内联注入的js文件路径。并且需要在路径后加入`?__inline`标识。

test.view.hbs

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
   {{{inline.tj}}}
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    {{#each test.css}}
        {{{this}}}
    {{/each}}
</head>
<body>
    1231232
    <div id="root"></div>
    {{#each test.js}}
        {{{this}}}
    {{/each}}
</body>
</html>

```

在模板文件中，只需要使用模板语法，获取`{{{inline.tj}}}`，在编译时即可实现注入。