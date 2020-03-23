---
title: 扩展Loader
order: 7
---

# 扩展Loader

在某些场景下，我们可能需要对一些内置的loader规则进行修改，例如删除某些loader，或者修改某个loader，又或者新增一个loader，这个时候对于loader的扩展就非常重要了，OMG提供了几个扩展字段，对不同资源进行自定扩展。

在OMG的配置文件中，可以配置`loaderOpt`字段，对指定的资源进行loader的扩展。`loaderOpt`中的每个属性必须传入一个函数，OMG会在组装rule的时候去执行对应资源的扩展函数，并将内置的rule通过参数的形式传入函数中提供给开发者进行修改，最终返回rule数组。

## style样式扩展

style的资源有四种规则，对应四种场景：
- css - css文件配置
- cssModule - css module配置
- scss - scss文件配置
- scssModule - scss module配置

```json
{
    output: {...},
    loaderOpt: {
        css: (rule) => {},
        cssModule: (rule) => {},
        scss: (rule) => {},
        scssModule: (rule) => {},
    }
}
```

例如我需要对scss文件添加一个额外的loader，那么可以这么做：

```js
loaderOpt: {
    scss: (rules) => {
        rules.push({
            name: 'sass-resources-loader',
            rule: {
                loader: 'sass-resources-loader',
                options: {
                    // Provide path to the file with resources
                    resources: './src/style/config.scss',
                },
            }
        })
        return rules;
    }
}
```

`rules`是一个数组，其中包括两个值，`name`和`rule`属性
- name是对应的loader名字
- rule是对应这个loader的所有配置

## svg扩展

svg的资源有四种规则，对应四种场景：
- svg_sprite_react - svg精灵图，并转换为react组件的loader配置
- svg_sprite - svg精灵图配置
- svg_url - svg强制使用url引入的配置
- svg_inline - svg强制inline的配置

## image扩展

image的资源有四种规则，对应四种场景：
- image - 图片的默认大小
- image_url - 图片强制使用url引入的配置
- image_inline - 图片强制inline的配置