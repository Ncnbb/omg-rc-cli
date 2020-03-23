const { pathConfig } = require( './path' );
module.exports = function createWebpackDevServerConfig ( webpackConfig, targetPath ) {

    const { devServer } = webpackConfig;
    const DEFAULT_DEV_SERVER_CONFIG = {
        host: '0.0.0.0',
        prot: 9527,
        // open: true,
        https: false,
        contentBase: pathConfig.appDist,
        stats: 'none',
        hot: true
    };

    return devServer ? Object.assign( DEFAULT_DEV_SERVER_CONFIG, devServer ) : DEFAULT_DEV_SERVER_CONFIG;
}