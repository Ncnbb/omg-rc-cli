---
title: ESlint使用
order: 5
---

# ESlint使用

OMG-RC-CLI内置eslint-loader,但是默认并不会开启eslint的检测。

在运行期间，会检查当前运行目录下是否存在eslint配置文件，当检测到eslint的配置文件，那么将会对js或者jsx的文件进行eslint构建检测。

## 默认配置

默认的eslint配置如下：

```json
{
    cache: false, // 不缓存结果
    enforce: 'pre', // 进过babel前进行检验
    failOnWarning: false, // 警告继续编译
    failOnError: true, // 错误停止编译
}
```

## 自定义配置

可以通过在omg.config.js中配合`eslint`字段，重写eslint-loader的相关配置，omg会在编译前对传入的配置和默认配置进行合并。

```json
{
  output: {
    ....
  },
  eslint: {
      failOnWarning: true
  }
}
```

