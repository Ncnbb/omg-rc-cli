const getWebpackBaseConfig = require( './webpack.config.base' );
const { pathConfig } = require( '../utils/path' );

function getWebpackConfig ( buildPath, options ) {

    const config = getWebpackBaseConfig(buildPath, options);

    config.mode = 'development';
    config.devtool = 'cheap-module-eval-source-map';
    // config.pathinfo = true;

    return config;
}

module.exports = getWebpackConfig;