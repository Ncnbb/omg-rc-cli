

## 介绍
> OMG CLI 是一套可以快速新建React项目的脚手架，基于 webpack 二次开发，进行了大量预设配置和功能扩展。

### 支持语法特性
- [x] ES6
- [x] Scss
- [x] Svg
- [x] React(JSX | TSX)语法转换
- [x] TypeScript语法转换
- [x] 自定义ESlint语法检测
- [] 可配置ESlint语法检测
- [] 分包
- [] 可配置Typescript语法检测
- [] 可视化脚手架配置界面

## 起步 && 安装 
```linux
npm install -g omg-rc-cli
```
## 提供命令
```javascript
// 快速新建项目
omg create

// 快速构建项目
omg build 
// 在指定路径下找找入口文件 匹配方式 **/js/*.(js|jsx)
omg build [targetPath]
// 构建指定目录的代码 匹配方式 js/*.(js|jsx)
omg build [targetPath] [targetDir]
```

