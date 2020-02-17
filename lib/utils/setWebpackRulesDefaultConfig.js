const pathConfig = require('./path');
const browserList = require('./getBrowserslist');

const getCacheIdentifier = require('./getCacheIdentifier');

module.exports = (config) => {
    return  {
        babelrc: config.hasConfig, // 不存，将不去查找项目中的配置文件
        configFile: config.path || false,
        cacheDirectory: pathConfig.appCacheDir, // 转换缓存存储目录
        cacheCompression: true, // 缓存压缩
        cacheIdentifier: getCacheIdentifier( process.env.OMG_ENV, 'omg-rc-cli' ), // 缓存更新策略，根据omg的版本号进行缓存更新控制
        sourceMaps: false, // map不构建
    
        inputSourceMap: false,// map不构建
        highlightCode: true, // 错误高亮
        presets:[
            [
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
            [
                require( '@babel/preset-react' ).default,
                {
                    // 如果是开发环境下，那么将开启开发者模式，开启以下插件，方便定位组件
                    // @babel/plugin-transform-react-jsx-self 
                    // @babel/plugin-transform-react-jsx-source.
                    // https://babeljs.io/docs/en/next/babel-preset-react.html
                    development: process.env.OMG_ENV === 'development'
                }
            ],
            
        ],
        plugins: ["@babel/plugin-transform-runtime"],
    }
}