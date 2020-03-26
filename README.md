

# omg-rc-cli
## 介绍

omg-rc-cli 是一套可以快速新建React项目的脚手架，基于webpack二次开发，进行了大量预设配置和功能扩展。

每次我们编写新项目时，都会为配置webpack而烦恼，而且针对不同的目录结构，也会有不同的配置方式，大大影响我们的开发效率，omg-rc-cli就是为了解决这一系列问题而开发的一套React脚手架，能帮助团队能快速的投入开发，并且互相遵从一些目录结构的规范进行页面开发。

## 特性
- 基于webpack构建，并带有合理的默认配置。
- 集成了前端生态中较好的构建插件。
- 是一个可全局安装的npm包。
- 让开发者可专注在撰写应用上，无需再纠结配置问题。

### 使用环境

node v8.9及以上

## 功能
- [x] ES6 | ES7
- [x] SCSS | CSS
- [x] Svg
- [x] React(JSX | TSX)语法转换
- [x] ESlint
- [x] TypeScript
- [x] handlebars
- [x] html资源自动注入
- [x] 自动资源切割
- [x] 图片智能优化，支持使用（png,jpg,jpeg,webp,gif） 
- [x] babel编译缓存
- [x] 压缩缓存
- [x] webpack资源依赖高速缓存
- [x] 多线程编译压缩

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

## 文档

- [快速上手](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/getting-started.zh-CN.md)
- [命令](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/command.zh-CN.md)
- [目录规范](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/dir.zh-CN.md)
- [构建](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/build.zh-CN.md)
- [配置](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/config.zh-CN.md)
- [ESlint使用](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/eslint.zh-CN.md)
- [Typescript使用](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/typescript.zh-CN.md)
- [扩展Loader](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/extension-loader.zh-CN.md)
- [JavaScript注入文档](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/jsinline.zh-CN.md)
- [OMG额外配置](https://github.com/Ncnbb/omg-rc-cli/blob/master/page/docs/getting-started/auxiliary.zh-CN.md)
