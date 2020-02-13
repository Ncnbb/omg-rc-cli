const path = require( 'path' );
const fs = require( 'fs' );
const errorlog = require( '../extension/console/errorLog' );
const getWebpcakConfig = require( '../utils/getWebpackConfig' );
const Loading = require( '../extension/console/loading' );
const log = require( '../extension/console/log' );

const DEFAULT_PATH = process.cwd();
let loading = null;

module.exports = ( targetPath, targetDir ) => {
    return new Promise( async ( resolve ) => {
        loading = new Loading( 'build preparation' );

        const BUILD_PATH = targetPath && targetPath != '' ? path.join( process.cwd(), targetPath ) : DEFAULT_PATH;
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

        // 如果targetPath存在，那么将会搜索指定Path下的所有js文件下的index.js文件
        // 如果targetDir存在，那么将会搜索指定path和dir中的js文件下的index.js文件
        const webpackConfig = await getWebpcakConfig( {
            buildPath: BUILD_PATH,
            buildDir: BUILD_DIR
        } );

        if ( !webpackConfig ) {
            loading.stop();
            resolve( false );
            return;
        }

        log( 'create webpack config success!' );

        loading.stop();
        resolve( true );
    } );

}