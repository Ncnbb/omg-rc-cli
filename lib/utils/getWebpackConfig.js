const log = require( '../extension/console/log' );
const getWebpackConfig = require( '../config/webpack.config.dev' );
module.exports = async ( cmdOpt ) => {
    return new Promise( async ( resolve, reject ) => {
        const { buildPath, buildDir } = cmdOpt;

        const webpackConfig = getWebpackConfig( buildPath );
        // 确保一定有入口
        if ( !webpackConfig ) {
            reject(new Error('init webpack base config error!'));
        } else {
            resolve( webpackConfig );
        }
    } );
}