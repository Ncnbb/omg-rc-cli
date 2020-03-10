---
title: 目录规范
order: 3
---

# 目录规范

OMG-RC-CLI需要依赖约定的目录结构进行构建。

一个完整的项目目录结构如下

```markdown
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

需要注意的是每一个页面的名字，`必须与html和js的入口文件名一致`，从上面的例子中看到，index文件下的html和js都有一个以index开头的js和hbs文件。

> 模板文件必须以view.hbs结尾才会被编译。

## 须知
OMG-RC-CLI会根据当前运行目录下的src目录中的所有文件进行扫描，当发现文件中存在和文件名一致的js会作为入口文件进行编译，如果发现html目录下有存在与文件名同名的hbs文件，那么将会作为页面html进行编译。