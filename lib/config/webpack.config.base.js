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
            extensions: ['.mjs', '.web.js', '.js', '.json', '.web.jsx', '.jsx', '.ts', 'tsx'],
            mainFields: ['module', 'jsnext:main', 'browser', 'main'],
            modules: [
                pathConfig.ownNodeModules,
                pathConfig.appNodeModules
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
            noCache: false, // 是否关闭缓存
            cacheToGlobal: false // 构建缓存到全局
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
                clearConsole: true,
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