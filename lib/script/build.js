const path = require( 'path' );
const fs = require( 'fs' );
const errorlog = require( '../extension/console/errorLog' );
const getWebpcakConfig = require( '../utils/getWebpackConfig' );
const getWebpackEntry = require('../utils/getWebpackEentry');
const Loading = require( '../extension/console/loading' );
const log = require( '../extension/console/log' );
const pathConfig = require( '../utils/path' );

const DEFAULT_PATH = pathConfig.appPath;
let loading = null;

module.exports = ( targetPath, targetDir ) => {
    return new Promise( async ( resolve ) => {
        loading = new Loading( 'build preparation' );

        const BUILD_PATH = targetPath && targetPath != '' ? path.join( pathConfig.appPath, targetPath ) : DEFAULT_PATH;
        const BUILD_DIR = targetDir && targetDir != '' ? targetDir : null;

        loading.update( 'run check the path and dir program!' );

        // 检查目录是否存在
        if ( !fs.existsSync( BUILD_PATH ) ) {
            errorlog( `Could not find ${BUILD_PATH}!` );
            resolve( false );
            loading.stop();
            return;
        }
        if ( targetDir ) {
            const dirPaht = path.join( BUILD_PATH, targetDir );
            if ( !fs.existsSync( path.join( dirPaht ) ) ) {
                errorlog( `Could not find ${dirPaht}!` );
                resolve( false );
                loading.stop();
                return;
            }
        }

        loading.update( 'run get webpack config program!' );


        getWebpcakConfig( {
            buildPath: BUILD_PATH,
            buildDir: BUILD_DIR
        } )
        .then((webpackConfig) => {
            log( 'init webpack base config successfully!' );
            return getWebpackEntry(webpackConfig, BUILD_PATH, BUILD_DIR)
        })
        .then((webpackConfig) => {
            log( 'init webpack entry config successfully' );

            // 最后
            log( 'create webpack config success!' );
            console.log(webpackConfig)
            loading.stop();
            resolve(true);
        })
        .catch((err) => {
            errorlog(err);
            loading.stop();
            resolve(false);
        })
    } );

}