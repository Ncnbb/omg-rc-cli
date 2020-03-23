---
title: 配置
order: 4
---

# 配置

OMG-RC-CLI内置大量的loader和插件，帮助开发者快速接入进行开发，当中开放部分配置提供给开发者进行自定义配置。

## 内置基本配置

假设当前运行命令的目录为`/root`

```json
{
  context: '/root',
  output: {
    path: '/root/dist',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/root/dist'
  },
  resolve: {
    alias: { root: '/root' },
    extensions: [ '.mjs', '.web.js', '.js', '.json', '.web.jsx', '.jsx' ],
    mainFields: [ 'module', 'jsnext:main', 'browser', 'main' ],
    modules: [
      'node_modules',
      '/root/node_modules'
    ]
  },
  plugins: [
    ...//内置大量插件，之后会详细说
  ],
  mode: 'production' | 'development' ,
  devtool: 'source-map' | 'eval',
  module: { 
      rules: [
          ...// 内置大量规则
      ] 
  },
  entry: {
    ...//入口配置
  }
}
```

## 内置loader

为了满足不同的文件进行处理，内置对js，css，html等资源的loader规则

### JavaScript

- babel-loader
- ts-loader
- eslint-loader

#### babel-loader

默认已经配置化奥babel-loader所用到的`presets`和`plugins`。当然你也可以在运行目录下配置babel的配置文件，那么omg在运行期间检测到运行目录下存在babel配置文件，那么将放弃内置的`presets`和`plugins`，使用配置文件中的babel配置。

##### 内置配置
- presets
  - @babel/preset-env
  - @babel/preset-react
- plugins
  - @babel/plugin-syntax-dynamic-import
  - @babel/plugin-proposal-class-properties
  - @babel/plugin-transform-runtime

> 尽可能使用默认配置，除非有特殊情况

#### ts-loader
omg运行时当检测到运行目录下存在typescript的配置文件，那么将动态添加ts-loader的相关配置。

#### eslint-loader

omg运行时当检测到运行目录下存在eslint的配置文件，那么将动态添加eslint-loader的相关配置。

### 样式

style模块中包含css和scss的处理。

css和scss都支持module配置，如果引入的css或者scss的文件名为*.css或*.scss，那么将直接进行编译，并输出css文件到指定的目录中。

如果引入的css或者scss的文件名为*.module.css或*.module.scss,那么将会把该css或者scss文件当初module使用，返回一个对象，对象为class的名字，样式将作为内联样式注入到head中使用。

```javascript

// index.scss
h1 {
    color: $sub;
    @include borderRadius();
}


// index.module.scss
.className1 {
    font-size: 14px;
}
.className2 {
    font-size: 14px;
}

// js
import '../style/index.scss'; // 输出css文件
import styles from '../style/index.module.scss';
// 对象包含
{
    className1: "class-name1--3Re-B"
    classMame2: "class-name2--sth_H"
}

// html
<head>
    <link href="*.css" rel="stylesheet">
    <style>
        .className1--3Re-B {
            font-size: 14px;
        }
        .className2-sth_H {
            font-size: 14px;
        }
    </style>
</head>
```

对样式的处理也添加了`postcss-loader`进行谦虚兼容处理。

### 图片

omg对图片的处理有多种机制，支持的图片格式有`jpg|jpeg|png|gif|webp`。
- 对于小于8MB的图片，将进行转换为base64的方式内联在css文件中。
- 对于大于8MB的图片，将会单独抽离输出到指定目录中。

当然也可以指定图片来进行强制的转换base64或者强制通过url获取。
- 在引入图片路径后添加?__inline，将强制转成base64
- 在引入图片路径后添加?__url，将强制图片通过url获取

```css
.logo{
    background: url('../images/1.jpg?__inline') no-repeat;
}
.logo2{
    background: url('../images/2.png') no-repeat;
}
.logo3{
    background: url('../images/3.gif?__url') no-repeat;
}
```

### HTML

omg使用`html-webpack-plugin`和`omg-inject-html-webpack-plugin`对html资源提供支持，并可自动注入页面相关的js和css等资源。

编写html必须严格遵守omg的文件目录格式，否则无法查找到html资源。资源文件必须是运行目录下的src文件中的每个文件名对应html文件中的`文件名.view.hbs`。

```markdown
|── root
|    |── src
|    |   |   |── index // 名字必须一致
|    |   |   |   |── html
|    |   |   |   |   |── index.view.hbs // 名字必须一致
|    |   |   |   |── js
|    |   |   |   |   |── index.js // 名字必须一致
|    |   |   |   |── fonts
|    |   |   |   |── images
|    |   |   |   |── style
|    |   |   |── list
|    |   |   |── ...
```

文件名，html名字和js名字必须一致。才能正确查找资源并正常的按需引入对应html所需要的资源。

html编写格式

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

### 模板引擎

目前omg只支持`handlebars`模板语法，可以利用`handlebars`模板语法对子模板进行引入，并且支持js引入`handlebars`模板进行处理。

html引入子模板
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    {{#each assets.css}}
        {{{this}}}
    {{/each}}
</head>
<body>
    <!-- 引入子模板 -->
    {{> ./sub.hbs}}
    <div id="root"></div>
    {{#each assets.js}}
        {{{this}}}
    {{/each}}
</body>
</html>

```

js使用模板引擎
```javascript
// js
import tpl from './tpl.hbs';

let $el = document.getElementById('root');

$el.innerHTML = tpl({
    list: [
        {"name": "name1"},
        {"name": "name2"},
        {"name": "name3"}
    ]
}, {
    helpers: {
        toUpperCase: function () {
            return 'Hi, ' + this.name.toUpperCase();
        }
    }
});

// tpl.hbs
{{#each list}}
    <div>{{toUpperCase name}}</div>
{{/each}}

```

### 字体
omg支持css引入字体文件，并进行导致，可直接在样式中定义进行引用

```css
@font-face {
    font-family: 'icomoon';
    src: url('../fonts/icomoon.eot?5e5uxp');
    src: url('../fonts/icomoon.eot?5e5uxp#iefix') format('embedded-opentype'),
        url('../fonts/icomoon.ttf?5e5uxp') format('truetype'),
        url('../fonts/icomoon.woff?5e5uxp') format('woff'),
        url('../fonts/icomoon.svg?5e5uxp#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}
```

> 现在的设备版本越来越高，我们应该尽可能不适用svg文件的iconfont。

### 矢量图

omg支持4种引入svg的方式。

- 样式表中引入
  - 强制inline引入
  - 强制使用url引入
- js文件引入
  - svg精灵图
  - svg精灵图，React组件

样式表引入方式：
```css
background: url('../svg/ic_eyes.svg?__inline'); // 转为base64内联在css中
background: url('../svg/ic_fast.svg?__url'); // 转为url获取，svg输出到svg文件中
```

js引入方式
```javascript
// 普通精灵图引入
import edit from '../svg/edit.svg?__sprite';
// 使用
<svg><use xlinkHref={`#${edit.id}`}></use></svg>

// 转为React组件使用
import Icon from '../svg/ic_free.svg';
<Icon style={} className=''/>
```

> 强烈建议使用React组件形式引入svg

## 自定义配置

在运行目录下创建`omg.config.js`，配置字段与webpack完全一致。

### 自定义配置webpack
omg内置一个智能合并器，会对内置的配置与传入的配置进行智能合并，会对合并的对象，需要注意的是，智能合并并不会导致内置的`plugins`和`rules`被覆盖，会采取数组合并。

> 尽量避免重复配置相同的文件类型使用相同的loader，这样会导致文件被重复执行，可能会出现无法估计的情况。

### 自定义babel和postcss对浏览器兼容字段

可以使用`browserslist`进行配置，omg会发现有此配置后，将优先使用你传入的配置。

```json
output: {
    ...
},
browserslist: [ // 浏览器
    'Chrome >= 45', 
    'last 2 Firefox versions',
    'ie >= 9', 
    'Edge >= 12',
    'iOS >= 9', 
    'Android >= 4', 
    'last 2 ChromeAndroid versions'
]
```

### 自定义图片处理

可以配置imageConfig字段，对图片处理做一些自定义。

- limit -> 配置图片大小限制，超出将会用url获取，或者内联base64
- compression -> 图片压缩优化，可以参考[image-webpack-loader](https://github.com/tcoopman/image-webpack-loader#readme)

```json
output: {
    ...
},
imageConfig: {
    limit: 10000,
    compression: {...}
}
```

> 使用build，watch和server的情况下，是不会对图片进行压缩处理的。

##### OMG内置对图片的压缩优化配置如下：

```javascript
{
    mozjpeg: {
        progressive: true,
        quality: 75
    },
    optipng: {
        enabled: false,
    },
    pngquant: {
        quality: [0.65, 0.90],
        speed: 4
    },
    gifsicle: {
        interlaced: false,
    },
    webp: {
        quality: 75
    },
    svgo: {
        plugins: [
            {
                removeViewBox: false,
            },
            {
                removeEmptyAttrs: false,
            },
        ],
    }
}
```

### 自定义矢量图配置

可以配置imageConfig字段，对svg执行svgo时进行配置,相关配置可以参考[svgo](https://github.com/svg/svgo#what-it-can-do)

```javascript
{
    mozjpeg: {
        progressive: true,
        quality: 75
    },
    ...
    svgo: {
        plugins: [
            {
                removeViewBox: false,
            },
            {
                removeEmptyAttrs: false,
            },
        ],
    }
}
```

因为omg对于svg转化为React组件有一套内置的方案，如果使用者对于转化过程有特殊处理，可以传入svGruntimeGenerator参数，值为一个执行文件的绝对路径。

```json
{
  output: {
    ....
  },
  svGruntimeGenerator: require.resolve('你的路径')
}
```

### 自定js压缩配置

OMG默认使用[terser-webpack-plugin]('https://github.com/webpack-contrib/terser-webpack-plugin)进行JavaScript的构建压缩。内置了一些默认配置来达到高效的压缩过程，当然也可以通过`omg.config.js`中的`terser`字段进行自定义。在运行的过程中，OMG会对传入的`terser`配置和内置的配置进行智能合并。[详细配置](https://github.com/terser/terser)。

> OMG只有在进行publish命令时才会进行压缩处理

- [x] 压缩缓存
- [x] 多线程压缩

```json
{
  output: {
    ....
  },
  terser: {
      parse: {
          ecma: 2017,
      },
  }
}
```

##### 默认的压缩配置如下：
```json
{
    parse: {
        ecma: 2017,
    },
    compress: {
        drop_console: false,
        drop_debugger: true,
        ecma: 5,
        comparisons: false,
        warnings: false,
        inline: 2,
        collapse_vars: true,
        reduce_vars: true
    },
    mangle:{
        safari10: true
    },
    output: {
        ecma: 5,
        ascii_only: true,
        beautify: false, // 最紧凑的输出
        comments: false, // 删除所有的注释
        safari10: true
    }
}
```

### 自定输出目录名

默认情况下，如果我们没有指定`targetDir`，那么将会默认输出到dist目录下的js,html目录中，如果我们指定了`targetDir`，那么将会输出到dist中与`targetDir`名字同名的目录中。

当有一种情况是如果我们需要指定一个名字去进行特殊输出，例如：当前指定`targetDir`为`test1`的目录，但是我们想把文件输出到`test2`的目录中，那么就可以再omg.config.js中配置`output.dirName`属性进行指定。


```json
output: {
    ...
    dirName: 'test2'
}
```