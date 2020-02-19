const getWebpackBaseConfig = require( './webpack.config.base' );
const pathConfig = require( '../utils/path' );


function getWebpackConfig ( buildPath ) {

    const config = getWebpackBaseConfig(buildPath);

    config.mode = 'development';
    config.devtool = 'cheap-module-eval-source-map';
    // config.pathinfo = true;

    config.module = {
        rules: []
    };

    return config;
}

module.exports = getWebpackConfig;