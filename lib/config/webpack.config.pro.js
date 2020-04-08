const getWebpackBaseConfig = require( './webpack.config.base' );

function getWebpackConfig ( buildPath, options ) {

    const config = getWebpackBaseConfig(buildPath, options);

    config.mode = 'production';
    config.devtool = 'none';
    // config.devtool = 'cheap-module-eval-source-map';
    // config.pathinfo = true;

    return config;
}

module.exports = getWebpackConfig;