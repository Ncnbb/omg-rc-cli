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