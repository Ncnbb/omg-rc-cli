const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
const { isUndefined } = require( '../utils/typeof' );
const FriendlyErrorsWebpackPlugin = require( 'friendly-errors-webpack-plugin' ); // 友好的webpack提示
const WebpackBar = require( 'webpackbar' ); // webpack进度提示
const createOuputFileName = require( '../utils/createOuputFileName' );
const createWebpackConfigAlias = require( '../utils/createWebpackConfigAlias' );
const createWebpackConfigSplitChunks = require( '../utils/createWebpackConfigSplitChunks' );

function getWebpackBaseConfig ( buildPath, options ) {

    const { progress, prompt, chunkhash } = options;
    const config = {
        context: pathConfig.appPath,

        // 默认输出
        output: {
            path: pathConfig.appDist,
            filename: `${pathConfig.jsDir}/${createOuputFileName( 'js', chunkhash )}`,
            chunkFilename: `${pathConfig.jsDir}/${createOuputFileName( 'jschunk', chunkhash )}`,
            publicPath: process.env.OMG_ENV == 'server' ? '/' : `${pathConfig.appDist}/`,
            pathinfo: false
            // crossOriginLoading: 'anonymous'
        },

        resolve: {
            // 默认提供root指向当前运行路径
            alias: createWebpackConfigAlias(),
            extensions: ['.jsx', '.tsx', '.js', '.ts', '.mjs', '.web.js',  '.json', '.web.jsx'],
            mainFields: ['module', 'jsnext:main', 'browser', 'main'],
            modules: [
                pathConfig.appNodeModules,
                pathConfig.ownNodeModules
            ]
        },
        module: {
            rules: []
        },
        plugins: [
        ],
        optimization: {
            splitChunks: createWebpackConfigSplitChunks()
        },
        omg: {
            filenameBefore: '',// 为所有资源的path加上filename之间加上指定路径
            autoFindEntry: true,
            noCache: false, // 是否关闭缓存
            cacheToGlobal: false, // 构建缓存到全局
            openOutputAssets: false, // 输出每个入口文件最终编译后的依赖
            outputAssetsDirName: '.assets'
        }
    };

    // 根据参数判断是否开启进度提示
    if ( progress ) {
        config.plugins.push(
            new WebpackBar( {
                name: 'OMG build',
                color: 'green',
            } )
        );
    }

    // 是否开启构建提示
    if ( prompt ) {
        config.plugins.push(
            new FriendlyErrorsWebpackPlugin( {
                clearConsole: false,
            } )
        )
    }

    // 当传入指定目录后
    if ( !isUndefined( buildPath ) && buildPath != pathConfig.appPath ) {
        // 将优先使用指定目录下的node_modules
        config.resolve.modules.unshift( path.resolve( pathConfig.appPath, buildPath, 'node_modules' ) );
        // 修改输出目录地址
        config.output.path = path.resolve( pathConfig.appPath, buildPath, 'dist' );
    }

    return config;
}

module.exports = getWebpackBaseConfig;