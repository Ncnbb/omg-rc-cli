const getWebpackBaseConfig = require( './webpack.config.base' );
const { pathConfig } = require( '../utils/path' );

function getWebpackConfig ( buildPath ) {

    const config = getWebpackBaseConfig(buildPath);

    config.mode = 'development';
    config.devtool = 'source-map';
    // config.devtool = 'cheap-module-eval-source-map';
    // config.pathinfo = true;

    return config;
}

module.exports = getWebpackConfig;