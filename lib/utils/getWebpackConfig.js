const getWebpackDevConfig = require( '../config/webpack.config.dev' );
const mergeOMGConfig = require( '../utils/mergeOMGConfig' );
module.exports = async ( cmdOpt ) => {
    return new Promise( async ( resolve, reject ) => {

        try {
            const { buildPath, buildDir } = cmdOpt;

            let webpackConfig;

            if ( process.env.OMG_ENV == 'development' ) {
                webpackConfig = getWebpackDevConfig( buildPath );
            }

            // 合并配置
            webpackConfig = mergeOMGConfig( webpackConfig );

            // 确保一定有入口
            if ( !webpackConfig ) {
                reject( new Error( 'init webpack base config error!' ) );
            } else {
                resolve( webpackConfig );
            }
        } catch ( err ) {
            reject( err );
        }
    } );
}