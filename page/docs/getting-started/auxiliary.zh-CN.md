---
title: OMG额外配置
order: 9
---
# OMG额外配置

## output

### dirName

- 类型：string
- 默认值：null
- 详情

指定输出的目录，如果当前运行命令是`omg build ./ member`，那么将会默认输出到`dist/member`中，如果配置了dirName属性，那么将会输出到`dist/[dirName]`中。
> 如果配置了dirName之后，html注入的资源路径出现问题，可以对publicPath进行调整。
> 
> 如果配置为空字符串，那么将直接输出在output.path下。

## omg

omg参数是针对omg自身的一些功能够参数，控制部分webpack的一些额外功能。

### autoFindEntry
- boolean
- 默认值：true
- 详情

默认情况下omg将根据自己的规则进行入口文件的查找，如果需要关闭自动寻找入口功能，可以通过此参数设置为`false`，来进行控制，那么入口配置权将交由开发者自己配置。

### filenameBefore
- string
- 默认值：''
- 详情

当需要对输出的文件的目录进行更细致的划分时使用，例如默认情况下，所有的资源都会根据资源类型输出到dist目录下的js，css，svg，html，images目录中，如果希望不同入口文件的js，css等资源可以输出到对应入口名称的目录下，再区分js，css，svg，html，images目录的话，可以使用`filenameBefore`来实现。

默认情况下输出目录结构：
```markdown
├── projectName
|   ├── dist
|   |   ├── js
|   |   |   ├── entre1.js
|   |   |   ├── entre2.js
|   |   |   ├── ....
|   |   ├── css
|   |   |   ├── entre1.css
|   |   |   ├── entre2.css
|   |   |   ├── ....
|   |   ├── html
|   |   ├── images
|   |   ├── svg
|   ├── package.json
|   ├── tsconfig.json(可选)
|   ├── .eslintrc(可选)
```

`filenameBefore`填写为`'[name]'`后输出结果

```markdown
├── projectName
|   ├── dist
|   |   ├── entry1
|   |   |   ├── js
|   |   |   |   ├── entry1.js
|   |   |   ├── css
|   |   |   |   ├── entry1.css
|   |   |   ├── images
|   |   |   ├── svg
|   |   |   ├── html
|   |   ├── entry2
|   |   |   ├── js
|   |   |   |   ├── entry2.js
|   |   |   ├── css
|   |   |   |   ├── entry2.css
|   |   |   ├── images
|   |   |   ├── svg
|   |   |   ├── html
|   ├── package.json
|   ├── tsconfig.json(可选)
|   ├── .eslintrc(可选)
```


### noCache

- boolean
- 默认值：false
- 详情

默认情况下OMG会有三种缓存（babel编译缓存，压缩缓存和依赖缓存），分别存储在运行目录下的`node_modules/.cache`中，因为建立缓存提高编译速度是需要牺牲无缓存下首次构建的时间，如果在某些情况下不需要进行缓存，可以使用`noCache`设置为`true`，那么将有效提高首次构建的速度，但是后续的构建速度将不会提高。

### cacheToGlobal

- boolean
- 默认值：false
- 详情

默认情况下，构建的存储地址是运行目录下的`node_modules/.cache`，如果想将缓存保存在全局固定的地方，那么可以使用`cacheToGlobal`，设置为`true`，那么缓存文件将会存放在全局的`node_modules`中，如果在服务器构建，在docker容器中进行构建，那么该参数能有效的将缓存保存在全局。

### 输出构建资产

将构建后的enter模块名在构建后所关联的资源路径输出到指定目录的json文件中。

#### openOutputAssets

- boolean
- 默认值：false
- 详情

开启资产输出功能。

#### outputAssetsDirName

- string
- 默认值：'.assets'
- 详情

当`openOutputAssets`为`true`时生效，默认是`.assets`，会根据omg.config中的output.path作为目标进行合拼路径。

## smp

- boolean
- 默认值：false
- 详情

任务耗时统计

如果需要查看当前构建的每个任务耗时情况，可以在`omg.config.js`中配置`smp`为`true`。在运行任务完成后，会打印耗时信息在控制台。
> 打印耗时信息会对构建性能产生一些影响！

```json
{
    output: {...},
    smp: true // 或false
}
```

## 美化界面

### jarvis
- boolean
- 默认值：false
- 详情

开启美化界面，只能在server命令下使用


### jarvisOpt
- object
- 默认值：
  - host: '0.0.0.0'
  - port: 9901
- 详情

可以参考： [github](https://github.com/zouhir/jarvis)

## 构建包依赖分析

### analyzer
- boolean
- 默认值：false
- 详情

开启依赖分析，默认在server命令下使用


### analyzerOpt
- object
- 默认值：
  - analyzerMode: 'server'
  - analyzerHost: '0.0.0.0'
  - analyzerPort: 9902
- 详情

可以参考： [github](https://github.com/webpack-contrib/webpack-bundle-analyzer)