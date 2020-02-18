

# omg-rc-cli
## 介绍
> omg-rc-cli 是一套可以快速新建React项目的脚手架，基于webpack二次开发，进行了大量预设配置和功能扩展。

### 特性
- 基于webpack构建，并带有合理的默认配置。
- 集成了前端生态中较好的构建插件。
- 是一个可全局安装的npm包。
- 让开发者可专注在撰写应用上，无需再纠结配置问题。

### 支持语法
- [x] ES6
- [x] Scss
- [x] Svg
- [x] React(JSX | TSX)语法转换
- [x] ESlint
- [x] TypeScript
- [] 分包
- [] 可配置Typescript语法检测
- [] 可视化脚手架配置界面

## 起步 && 安装 
```Shell
npm install -g omg-rc-cli
```
## 提供命令
```Shell
# 快速新建项目
omg create

# 快速构建项目
omg build 

# 在指定路径下找找入口文件 匹配方式 **/js/*.(js|jsx)
omg build [targetPath]

# 构建指定目录的代码 匹配方式 js/*.(js|jsx)
omg build [targetPath] [targetDir]
```

