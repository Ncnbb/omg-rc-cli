---
title: Node API
order: 11
---

# Node API

## 基本使用

OMG提供4个常规调用的api，提供给Node`request`来进行调用。
- build
- publish
- watch
- server

调用方式如下，在项目中install`omg-rc-cli`，通过传入配置进行调用。

```js
const omg = require('../index_node');

async function build() {
    const result = await omg.server({
        path: null,
        dir: null, 
        env: {},
        options: {
            console: false
        },
        config: {
            omg: {
                ...
            },
            output: {
                ...
            },
            browserslist: [ // 浏览器
                'Chrome >= 45',
                'last 2 Firefox versions',
                'ie >= 9',
                'Edge >= 12',
                'iOS >= 9',
                'Android >= 4',
                'last 2 ChromeAndroid versions'
            ],
            devServer: {
                before: ( app, server ) => {
                   //...
                },
                port: 9599,
                hot: true
            },
            resolve: {
                alias: {
                    ...
                }
            }
        }
    });

    console.log(result);
}

build();

```

> 需要使用同步调用的方式，返回true或者false代表构建是否成功。

## 参数的说明

### path

作用相当于使用命令行时，传入的`targetPath`,详情可以查看构建一章说明[链接](/getting-started/build#targetpath)

### dir

作用相当于使用命令行时，传入的`targetDir`,详情可以查看构建一章说明[链接](/getting-started/build#targetdir)

### env

详情可以查看命令一章说明[链接](/getting-started/command#更多参数传递)

示例：
```js
{
    env: {
        prod: 1,
        cdn: 1
    }
}
```

### options

options配置对应的是使用命令行时的一些参数

- target - [链接](/getting-started/command#指定构建单一文件)
- remove - [链接](/getting-started/command#删除目录)
- progress - [链接](/getting-started/command#去除构建进度提示)
- prompt - [链接](/getting-started/command#去除构建详细提示)
- chunkhash[ - 链接](/getting-started/command#去除构建publish时添加hash)
- console - [链接](/getting-started/command#去所有的打印信息)

### config

就是webpack的配置，可以参考webpack的文档以及[OMG的额外配置项](/getting-started/auxiliary)。

## 额外说明

考虑到使用node进行调用大多可能是处于服务器情况下使用，所以默认会在`publish`或`build`的情况下，去除所有默认的的构建进度，详细信息以及日志打印功能，如果要开启，参考[options](/getting-started/node-api#options)配置进行配置。

> `server`或`watch`模式下，强制开启进度日志等打印功能。