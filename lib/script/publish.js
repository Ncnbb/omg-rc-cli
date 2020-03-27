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
const checkRunDevDependencies = require( '../utils/checkRunDevDependencies' );

let loading = null;

function build ( targetPath, targetDir, env ) {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
    process.env.OMG_ENV = 'production';
    return new Promise( async ( resolve ) => {

        const BUILD_PATH = targetPath && targetPath != '' ? path.join( pathConfig.appPath, targetPath ) : pathConfig.appPath;
        const BUILD_DIR = targetDir && targetDir != '' ? targetDir : null;
        targetPath && initPathConfig( targetPath, targetDir );

        // 检查运行环境
        const isPass = await checkRunDevDependencies();
        if ( !isPass ) {
            loading.stop();
            resolve( false );
        }

        loading = new Loading( 'build preparation' );
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
        }

        loading.update( 'run get webpack config program!' );


        getWebpcakConfig( {
            buildPath: BUILD_PATH,
            buildDir: targetDir,
            env
        } )
            .then( ( webpackConfig ) => {
                console.log(webpackConfig)
                log( 'init webpack base config successfully!' );
                return getWebpackEntry( webpackConfig, BUILD_PATH, BUILD_DIR )
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack entry config successfully!' );
                return getWebpackBuildRules( webpackConfig, targetDir );
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack rule config successfully!' );
                loading.stop();
                return createWebpackCompiler( clearOtherWebpackConfig( webpackConfig ) );
            } )
            .then( ( data ) => {
                const { compiler, config } = data;
                return new Promise( ( resolve, reject ) => {
                    compiler.run( ( err, stats ) => {
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

                        return resolve( {
                            stats,
                            outputPath: compiler.options.output.path
                        } );
                    } );
                } )

            } )
            .then( ( compilerInfo ) => {
                // 最后
                log( 'create webpack config success!' );
                infoLog( `output path:${compilerInfo.outputPath}` )
                resolve( true );
            } )
            .catch( ( err ) => {
                errorlog( err );
                loading.stop();
                resolve( false );
            } )
    } );

}

module.exports = build;