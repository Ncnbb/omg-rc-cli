const getWebpackBaseConfig = require( './webpack.config.base' );

function getWebpackConfig ( buildPath ) {

    const config = getWebpackBaseConfig(buildPath);

    config.mode = 'production';
    config.devtool = 'none';
    // config.devtool = 'cheap-module-eval-source-map';
    // config.pathinfo = true;

    return config;
}

module.exports = getWebpackConfig;