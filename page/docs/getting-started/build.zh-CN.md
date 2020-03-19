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

如果不传入任何参数，那么OMG将会在当前目录下查找src目录，并且查找src目录下对应的入口文件和html文件。

查找规则是`src/*/*.js|jsx|ts|tsx`，OMG将会根据查找到的入口文件名字去查找对应的html入口文件。例如src目录下有`index`文件，`index`文件下的`js`文件下存在`index.js`，那么将会把index注入到入口配置中，同时会查找`index`文件下的`html`文件下的`index.hbs`作为html入口文件。

```json
├── projectName
|   |── src
|   |   |── index
|   |   |   |── html
|   |   |   |   |── index.view.hbs
|   |   |   |── js
|   |   |   |   |── index.js
|   |   |   |── fonts
|   |   |   |── images
|   |   |   |── style
|   |   |── list
|   |   |── ...
|   ├── dist
|   ├── package.json
|   ├── tsconfig.json(可选)
|   ├── .eslintrc(可选)
```
### targetPath

targetPath参数用于指定OMG需要编译的目录，例如当前你的项目目录如下

```json
├── root
|    ├── projectName
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
```

你运行OMG的路径在root下，那么将找不到对应的入口文件，因为root目录下并没有`src`文件，这个时候可以通过`targetPath`命令指定运行目录。
```shell
-> root: omg build ./projectName
```
> 需要注意，如果指定了targetPath参数，那么运行OMG时的根目录将会设定为targetPath指定的路径，包括node_modules的查找路径。

### targetDir

在一些情况下，我们对于一个项目中的模块可能会进行拆分。这样可以有效的较少构建时需要进行构建的文件数量。拆分文件必须在src下进行，例如：

```json
├── projectName
|   |── src
|   |   |── member   
|   |   |   |── index
|   |   |   |   |── html
|   |   |   |   |   |── index.view.hbs
|   |   |   |   |── js
|   |   |   |   |   |── index.js
|   |   |   |   |── fonts
|   |   |   |   |── images
|   |   |   |   |── style
|   |   |   |── list
|   |   |   |── ...
|   |   |── shop   
|   |   |   |── index
|   |   |   |   |── html
|   |   |   |   |   |── index.view.hbs
|   |   |   |   |── js
|   |   |   |   |   |── index.js
|   |   |   |   |── fonts
|   |   |   |   |── images
|   |   |   |   |── style
|   |   |   |── list
|   |   |   |── ...
|   ├── dist
|   ├── package.json
|   ├── tsconfig.json(可选)
|   ├── .eslintrc(可选)
```

像上面的例子中，项目中对会员中心和购物流程分开，这样就可以在修改会员中心的代码时，无需对购物流程进行重复构建。

在设置了targetDir的时候，默认输出的规则也会发现改变，为了防止命名冲突的问题，所以会在`dist/*`下再添加一层目录。

```json
├── projectName
|   |── src
|   |   |── member   
|   |   |   |── index
|   |   |   |   |── html
|   |   |   |   |   |── index.view.hbs
|   |   |   |   |── js
|   |   |   |   |   |── index.js
|   |   |   |   |── fonts
|   |   |   |   |── images
|   |   |   |   |── style
|   |   |   |── list
|   |   |   |── ...
|   |   |── shop   
|   |   |   |── index
|   |   |   |   |── html
|   |   |   |   |   |── index.view.hbs
|   |   |   |   |── js
|   |   |   |   |   |── index.js
|   |   |   |   |── fonts
|   |   |   |   |── images
|   |   |   |   |── style
|   |   |   |── list
|   |   |   |── ...
|   ├── dist
|   |   |── js
|   |   |   |── member
|   |   |   |── shop
|   |   |── html
|   |   |   |── member
|   |   |   |── shop
|   |   |── css
|   |   |   |── member
|   |   |   |── shop
|   ├── package.json
|   ├── tsconfig.json(可选)
|   ├── .eslintrc(可选)
```