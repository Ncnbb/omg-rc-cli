---
title: 命令
order: 2
---

# 命令

OMG-RC-CLI提供几个命令供开发使用。

## 初始化

```shell
omg init <projectName>
```

## 创建页面目录

```shell
omg create <dirPath> <name>
```

## 构建

```shell
omg build [targetPath] [targetDir] // 开发构建
omg watch [targetPath] [targetDir] // 监听构建
omg server [targetPath] [targetDir] // 本地服务
omg publish [targetPath] [targetDir] // 生成构建
```
## 指定构建单一文件

- -t --target
  - 默认：null

一般情况下用过targetPath搭配targetDir可以很自由的进行多个目录之间的打包任务，但是当特殊情况下，无视webpack的分包策略优化，进行指定的文件进行构建，可以使用`-t --target`参数指定文件名称，那么omg将会根据`targetPath`和`targetDir`的目录下查找指定target的文件名进行单一构建。

```shell
omg build [targetPath] [targetDir] -t [targetDirName]
```

## 删除目录

在构建命令中添加`-r`或者`--remove`参数，将会根据当前OMG配置的`output.path`中的路径，进行资源清楚，默认不会删除！

- -r --remove
  - 默认：关闭

```shell
omg build [targetPath] [targetDir] -r
```

> 需要注意，-r参数只会在watch，publish，build中生效，server命令不会生效

## 去除构建进度提示

- --no-progress
  - 默认：开启

在构建命令中添加`--no-progress`参数，OMG将不会开启构建进度，一般用于服务器构建时减少对应进程中的log数量。

## 去除构建详细提示

- --no-prompt
  - 默认：开启

在构建命令中添加`--no-prompt`参数，OMG将不会开启构建详细提示，一般用于服务器构建时减少对应进程中的log数量，建议开启，当出现构建问题的情况下，将会提供更有效的错误定位。

```shell
omg build [targetPath] [targetDir] --no-prompt
```

## 去除构建publish时添加hash

- --no-chunkhash
  - 默认：关闭

添加`--no-chunkhash`参数，将会在publish时不会添加hash后缀。

```shell
omg publish [targetPath] [targetDir] --no-chunkhash
```

## 去所有的打印信息

- --no-console
  - 默认：关闭

添加`--no-console`参数，将会在build或publish时不会打印任何信息，在服务器构建时提供帮助。

```shell
omg publish [targetPath] [targetDir] --no-console
```

## 更多参数传递

当我们需要在启动OMG命令的时候附带一些列的参数配置，方便在OMG配置文件中使用的时候，可以使用`--env.xxx=xxx`的方式进行传递。

```shell
omg publish --env.prod=1 --env.cdn=1
```

那么在OMG的配置文件中，将可以这样获取：

omg.config.js

```js
module.exports = ( env ) => {
    console.log(env.prod) // 1
    console.log(env.cdn) // 1
    return {
        ...
    }
}
```