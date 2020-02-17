const hasBabelConfigFile = require( './hasBabelConfigFile' );
const pathConfig = require( './path' );
const getCacheIdentifier = require( './getCacheIdentifier' );
const browserList = require( './getBrowserList' );

// 文档位置，结合babel和babel-loader
// https://www.babeljs.cn/docs/options
// https://github.com/babel/babel-loader

module.exports = () => {
    // 需要判断当前运行目录下是否存在.babelrc配置文件，如果存在，那么将使用babel的配置文件，否则使用内置文件
    const { hasBabelConfig, path } = hasBabelConfigFile();
    return {
        babelrc: hasBabelConfig, // 不存，将不去查找项目中的配置文件
        configFile: path || false,
        cacheDirectory: pathConfig.appCacheDir, // 转换缓存存储目录
        cacheCompression: true, // 缓存压缩
        cacheIdentifier: getCacheIdentifier( process.env.OMG_ENV, 'omg-rc-cli' ), // 缓存更新策略，根据omg的版本号进行缓存更新控制
        sourceMaps: false, // map不构建

        inputSourceMap: false,// map不构建
        highlightCode: true, // 错误高亮
        presets: [
            !hasBabelConfig && [
                require( '@babel/preset-env' ).default,
                {
                    targets: { // 目标环境
                        browsers: browserList
                    },
                    ignoreBrowserslistConfig: true, // 忽略browserslist文件配置
                    // 使用@babel/plugin-transform-runtime来进行局部传入es6helper和polyfill，不污染全局变量
                    useBuiltIns: false,
                    modules: false, // 是否转译module syntax，默认是 commonjs
                    debug: false // 是否输出启用的plugins列表
                }
            ],
            !hasBabelConfig && [
                require( '@babel/preset-react' ).default,
                {
                    // 如果是开发环境下，那么将开启开发者模式，开启以下插件，方便定位组件
                    // @babel/plugin-transform-react-jsx-self 
                    // @babel/plugin-transform-react-jsx-source.
                    // https://babeljs.io/docs/en/next/babel-preset-react.html
                    development: process.env.OMG_ENV === 'development'
                }
            ]
        ].filter(Boolean),
        // todo
        plugins: [
            require('@babel/plugin-syntax-dynamic-import').default,// 解决webpack异步import语法被错误转换
            [
                require('@babel/plugin-proposal-class-properties').default, // 针对class中的static做处理
                {loose: true} // 不使用defineProperty来对static赋值，而是使用默认赋值方式
            ],
            [
                require('@babel/plugin-transform-runtime').default,
                {
                    corejs: 3, // 更高的api支持，需要额外引用corejs-3
                    helpers: true, // 使用moduleName来进行引用
                    regenerator: true, // 转换的api不会污染全局
                    useESModules: true, // 去除commonjs的标识 https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
                    absoluteRuntime: true, // 使用绝对路径进行模块引用, 用户使用时必须要安装运行时
                    version: require('@babel/runtime/package.json').version,
                }
            ]
        ]
    };
}