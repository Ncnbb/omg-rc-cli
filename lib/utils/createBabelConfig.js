const { pathConfig } = require( './path' );
const browserList = require( './browserslist' );

const hasConfigFile = require( './hasConfigFile' );
const getCacheIdentifier = require( './getCacheIdentifier' );

module.exports = ( config, type ) => {
    const hasBabelConfig = hasConfigFile( 'babel', false );
    const babelConfig = {
        babelrc: hasBabelConfig.hasConfig, // 不存在，将不去查找项目中的配置文件
        configFile: hasBabelConfig.path || false,
        sourceMaps: false, // map不构建
        inputSourceMap: false,// map不构建
        highlightCode: true, // 错误高亮
        presets: hasBabelConfig.hasConfig ? [] : [
            [
                require.resolve( '@babel/preset-env' ),
                {
                    targets: { // 目标环境
                        browsers: config.browserList || browserList
                    },
                    ignoreBrowserslistConfig: true, // 忽略browserslist文件配置
                    // 使用@babel/plugin-transform-runtime来进行局部传入es6helper和polyfill，不污染全局变量
                    useBuiltIns: false,
                    modules: false, // 是否转译module syntax，默认是 commonjs
                    debug: false // 是否输出启用的plugins列表
                }
            ],
            [
                require.resolve( '@babel/preset-react' ),
                {
                    // 如果是开发环境下，那么将开启开发者模式，开启以下插件，方便定位组件
                    // @babel/plugin-transform-react-jsx-self 
                    // @babel/plugin-transform-react-jsx-source.
                    // https://babeljs.io/docs/en/next/babel-preset-react.html
                    development: process.env.OMG_ENV === 'development' || process.env.OMG_ENV === 'server'
                }
            ],

        ],
        plugins: hasBabelConfig.hasConfig ? [] : [
            require.resolve( '@babel/plugin-syntax-dynamic-import' ),// 解决webpack异步import语法被错误转换
            [
                require.resolve( '@babel/plugin-proposal-decorators' ), // 兼容装饰器
                { legacy: true }
            ],
            [
                require.resolve( '@babel/plugin-proposal-class-properties' ), // 针对class中的static做处理
                { loose: true } // 不使用defineProperty来对static赋值，而是使用默认赋值方式
            ],
            [
                require.resolve( '@babel/plugin-transform-runtime' ),
                {
                    corejs: 3, // 更高的api支持，需要额外引用corejs-3
                    helpers: true, // 使用moduleName来进行引用
                    regenerator: true, // 转换的api不会污染全局
                    useESModules: true, // 去除commonjs的标识 https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
                    absoluteRuntime: true, // 使用绝对路径进行模块引用, 用户使用时必须要安装运行时
                    version: require( '@babel/runtime/package.json' ).version,
                }
            ]
        ],
    };

    // 如果是webpack调用，才进行缓存策略
    if ( type == 'webpack' ) {
        babelConfig.cacheDirectory = !config.omg.noCache ? pathConfig.appCacheDir : false; // 转换缓存存储目录
        babelConfig.cacheCompression = !config.omg.noCache; // 缓存压缩
        babelConfig.cacheIdentifier = getCacheIdentifier( process.env.NODE_ENV, 'omg-rc-cli' ); // 缓存更新策略，根据omg的版本号进行缓存更新控制
    }

    // 当开启了热更新，需要额外配置babel插件
    if ( process.OMG_ENV == 'server' && config.devServer && config.devServer.hot ) {
        babelConfig.plugins.unshift( require.resolve( "react-hot-loader/babel" ) );
    }

    return babelConfig;
}