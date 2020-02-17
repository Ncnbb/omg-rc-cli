const pathConfig = require( '../utils/path' );
const path = require( 'path' );
const { isUndefined } = require( '../utils/typeof' );
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 友好的webpack提示
const WebpackBar = require('webpackbar'); // webpack进度提示

function getWebpackBaseConfig ( buildPath ) {
    const config = {
        context: pathConfig.appPath,

        // 默认输出
        output: {
            path: pathConfig.appDist,
            filename: '[name].js',
            chunkFilename: '[name].chunk.js'
        },

        resolve: {
            // 默认提供root指向当前运行路径
            alias: {
                root: pathConfig.appPath
            },
            extensions: ['.mjs', '.web.js', '.js', '.json', '.web.jsx', '.jsx', '.ts', '.tsx'],
            mainFields: ['module', 'jsnext:main', 'browser', 'main'],
            modules: [
                pathConfig.ownNodeModules,
                pathConfig.appNodeModules
            ]
        },
        plugins: [
            new WebpackBar({
                name: 'OMG build',
                color: 'green',
            }),
            new FriendlyErrorsWebpackPlugin({
                clearConsole: false,
            }),
        ]
    };
    // 当传入指定目录后
    if ( !isUndefined(buildPath) && buildPath != pathConfig.appPath ) {
        // 将优先使用指定目录下的node_modules
        config.resolve.modules.unshift( path.resolve( pathConfig.appPath, buildPath, 'node_modules' ) );
        // 修改输出目录地址
        config.output.path = path.resolve(pathConfig.appPath, buildPath, 'dist');
    }

    return config;
}

module.exports = getWebpackBaseConfig;