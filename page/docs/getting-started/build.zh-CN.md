---
title: 构建
order: 3
---

# 构建

## 构建命令

构建运行命令如下：
```shell
omg build [targetPath] [targetDir] // 开发构建
omg watch [targetPath] [targetDir] // 监听构建
omg server [targetPath] [targetDir] // 本地服务
omg publish [targetPath] [targetDir] // 生产构建
```
默认可以传入参数，那么运行目录将会在当前目录下。

## 参数

### targetPath
指定的目录，如果你的项目中对不同模块进行拆分，那么可能会存在多个项目，为了实现可以单独项目模块打包，那么我们必然会将目录进行拆分，例如会拆分为shop，member等等。

```markdown
|── root
|    ├── shop
|    |   |── src
|    |   |   |── index
|    |   |   |   |── html
|    |   |   |   |   |── index.view.hbs
|    |   |   |   |── js
|    |   |   |   |   |── index.js
|    |   |   |   |── fonts
|    |   |   |   |── images
|    |   |   |   |── style
|    |   |   |── list
|    |   |   |── ...
|    ├── member
|    |   |── src
|    |   |   |── index
|    |   |   |   |── html
|    |   |   |   |   |── index.view.hbs
|    |   |   |   |── js
|    |   |   |   |   |── index.js
|    |   |   |   |── fonts
|    |   |   |   |── images
|    |   |   |   |── style
|    |   |   |── list
|    |   |   |── ...
|    |   ├── dist
├── package.json
```

那么在这种目录下，就可以通过指定构建目录member或者shop来进行打包。

```shell
cd root
omg build ./member
```

那么将会在member文件中查找src中符合规则的页面和js进行构建

### targetDir

如果我们只需要构建`member`目录中其中一个页面，那么可以通过`targetDir`来进行指定

```shell
cd root
omg build ./member/src ./index
```

> 在开发阶段，可以有效减少构建页面的数量