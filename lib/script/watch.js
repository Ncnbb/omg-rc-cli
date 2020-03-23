const path = require( 'path' );
const fs = require( 'fs' );
const errorlog = require( '../extension/console/errorLog' );
const getWebpcakConfig = require( '../utils/getWebpackConfig' );
const getWebpackEntry = require( '../utils/getWebpackEentry' );
const getWebpackBuildRules = require( '../utils/getWebpackBuildRules' );
const createWebpackCompiler = require( '../utils/createWebpackCompiler' );
const Loading = require( '../extension/console/loading' );
const log = require( '../extension/console/log' );
const infoLog = require( '../extension/console/infoLog' );
const { pathConfig, initPathConfig } = require( '../utils/path' );
const clearOtherWebpackConfig = require( '../utils/clearOtherWebpackConfig' );
const watchCommandConfig = require('../config/watchCommandConfig');
let loading = null;
let watching;
function watch ( targetPath, targetDir ) {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
    process.env.OMG_ENV = 'development';
    return new Promise( async ( resolve ) => {
        loading = new Loading( 'build preparation' );

        const BUILD_PATH = targetPath && targetPath != '' ? path.join( pathConfig.appPath, targetPath ) : pathConfig.appPath;
        const BUILD_DIR = targetDir && targetDir != '' ? targetDir : null;
        targetPath && initPathConfig(targetPath);

        loading.update( 'run check the path and dir program!' );

        // 检查目录是否存在
        if ( !fs.existsSync( BUILD_PATH ) ) {
            errorlog( `Could not find ${BUILD_PATH}!` );
            resolve( false );
            loading.stop();
            return;
        }

        if ( targetDir ) {
            const dirPaht = path.join( BUILD_PATH, './src', targetDir );
            if ( !fs.existsSync( path.join( dirPaht ) ) ) {
                errorlog( `Could not find ${dirPaht}!` );
                resolve( false );
                loading.stop();
                return;
            }
            // 当指定src下某个目录进行打包的时候，output将会增加一层
            changeOutputPath(targetDir);
        }

        loading.update( 'run get webpack config program!' );


        getWebpcakConfig( {
            buildPath: BUILD_PATH,
            buildDir: targetDir
        } )
            .then( ( webpackConfig ) => {
                log( 'init webpack base config successfully!' );
                return getWebpackEntry( webpackConfig, BUILD_PATH, BUILD_DIR )
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack entry config successfully!' );
                return getWebpackBuildRules( webpackConfig );
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack rule config successfully!' );
                loading.stop();
                return createWebpackCompiler( clearOtherWebpackConfig( webpackConfig ) );
            } )
            .then( ( data ) => {
                return new Promise( ( resolve, reject ) => {
                    const {compiler, config} = data;
                    watching = compiler.watch( watchCommandConfig, ( err, stats ) => {
                        if ( err ) {
                            return reject( err );
                        }

                        let jsonStats = stats.toJson( {
                            all: false,
                            errors: true,
                        } );
                        if ( stats.hasErrors() && jsonStats.errors.length > 0 ) {
                            let error = new Error( jsonStats.errors[0] );
                            error.errors = jsonStats.errors;
                            return reject( error );
                        }

                        infoLog( 'Start watch!' );
                    } );
                } )

            } )
            .catch( ( err ) => {
                errorlog( err );
                loading.stop();
            } )
    } );

}

module.exports = watch;