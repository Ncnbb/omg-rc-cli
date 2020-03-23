const getWebpackDevConfig = require( '../config/webpack.config.dev' );
const getWebpackProConfig = require( '../config/webpack.config.pro' );
const mergeOMGConfig = require( '../utils/mergeOMGConfig' );
const getProjectConfig = require( '../utils/getProjectConfig' );
const { changeOutputPath } = require( '../utils/path' );

module.exports = async ( cmdOpt ) => {
    return new Promise( async ( resolve, reject ) => {

        try {
            const { buildPath, buildDir } = cmdOpt;

            let webpackConfig;
            const customOMGConfig = getProjectConfig();

            // 当指定src下某个目录进行打包的时候，output将会增加一层
            // 如果有指定output.dirName,那么将使用output.dirName
            customOMGConfig && changeOutputPath( customOMGConfig.output && customOMGConfig.output.dirName ? customOMGConfig.output.dirName : buildDir ? buildDir : '' );

            if ( process.env.OMG_ENV == 'development' || process.env.OMG_ENV == 'server' ) {
                webpackConfig = getWebpackDevConfig( buildPath );
            } else {
                webpackConfig = getWebpackProConfig( buildPath );
            }

            // 合并配置
            webpackConfig = customOMGConfig ? mergeOMGConfig( webpackConfig, customOMGConfig ) : webpackConfig;

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