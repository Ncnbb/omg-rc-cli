---
nav:
  title: 快速上手
  order: 1
order: 1
---

# 快速上手

## 安装

可全局进行安装，无需每个项目单独安装

```Shell
npm install -g omg-rc-cli
```

因为omg-rc-cli需要依赖@babel/runtime-corejs3，所以需要在业务代码中手动引入

### 依赖引入
```Shell
npm install -save-dev @babel/runtime-corejs3
```

## 初始化项目

### 创建目录

假设是一个全新的项目，那么可以先执行init创建目录
```Shell
omg init myProject
```
### 项目结构
创建后，你的项目应如下所示：
```markdown
├── src
├── package.json
```

### 创建页面

进入src目录下，执行以下命令
```Shell
cd myProject/src
omg create ./ firstProject
```
### 页面结构
创建后，你的项目应如下所示：
```markdown
├── html
├── images
├── js
├── style
```

## 编写页面

- 在刚刚创建的firstProject目录下的js文件夹中创建一个firstProject.js
- 在刚刚创建的firstProject目录下的html文件夹中创建一个firstProject.view.hbs

firstProject.view.hbs
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    {{#each assets.css}}
        {{{this}}}
    {{/each}}
</head>
<body>
    <div id="root"></div>
    {{#each assets.js}}
        {{{this}}}
    {{/each}}
</body>
</html>
```

firstProject.js
```javascript
const THIS_IS_CONST = 123;
console.log(THIS_IS_CONST);
```

## 编译
我们进入`myProject`目录下运行以下命令

```shell
omg build ./
```

> 如果出现编译失败，有可能是node-sass的版本问题

恭喜你，现在已经可以按照约定的目录规范进行开发了。