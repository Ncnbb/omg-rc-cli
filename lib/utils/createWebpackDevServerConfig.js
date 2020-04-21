const { pathConfig } = require( './path' );
const webpack = require( 'webpack' );
const path = require( 'path' );
const fs = require( 'fs' );

module.exports = function createWebpackDevServerConfig ( webpackConfig, targetPath ) {

    let { devServer } = webpackConfig;
    const DEFAULT_DEV_SERVER_CONFIG = {
        host: '0.0.0.0',
        port: 9527,
        // open: true,
        https: false,
        contentBase: pathConfig.appDist,
        stats: 'none',
        // hot: true
    };

    webpackConfig.devServer = devServer ? Object.assign( DEFAULT_DEV_SERVER_CONFIG, devServer ) : DEFAULT_DEV_SERVER_CONFIG;
    // 如果配置中设置了hot，那么将开启热更新
    // if ( devServer.hot ) {
    //     webpackConfig.plugins.push( new webpack.HotModuleReplacementPlugin() );

    //     // 当开启了hot reload后，需要对每个入口文件添加热更新代码
    //     if ( webpackConfig && webpackConfig.entry ) {
    //         for ( let key in webpackConfig.entry ) {
    //             const entryName = key;
    //             // 检查是否存在入口html，只对有入口html进行添加热更新代码
    //             const entryPath = webpackConfig.entry[entryName];

    //             const htmlPath1 = path.join( entryPath, `../../html/${entryName}.view.hbs` );
    //             const htmlPath2 = path.join( entryPath, `../../html/${entryName}.view.handlebars` );

    //             if ( fs.existsSync( htmlPath1 ) || fs.existsSync( htmlPath2 ) ) {
    //                 webpackConfig.entry[entryName] = ['react-hot-loader/patch', entryPath];
    //             }
    //         }
    //     }
    // }
    return webpackConfig;
}