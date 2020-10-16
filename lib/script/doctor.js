const path = require( 'path' );
const fs = require( 'fs' );
const errorlog = require( '../extension/console/errorLog' );
const getWebpcakConfig = require( '../utils/getWebpackConfig' );
const getWebpackEntry = require( '../utils/getWebpackEentry' );
const getWebpackBuildRules = require( '../utils/getWebpackBuildRules' );
const createWebpackCompiler = require( '../utils/createWebpackCompiler' );
const log = require( '../extension/console/log' );
const infoLog = require( '../extension/console/infoLog' );
const { pathConfig, initPathConfig } = require( '../utils/path' );
const clearOtherWebpackConfig = require( '../utils/clearOtherWebpackConfig' );
const checkRunDevDependencies = require( '../utils/checkRunDevDependencies' );
const removeOutputDir = require( '../utils/removeOutputDir' );

const detectorClone = require( "../utils/doctor/detectorClone" );
const smartEntry = require("../utils/doctor/smartEntry");

let loading = null;

function publish ( targetPath, targetDir, env, options, config = null ) {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
    process.env.OMG_ENV = 'production';
    process.env.OMG_CONSOLE = '1';

    return new Promise( async ( resolve ) => {
        const BUILD_PATH = targetPath && targetPath != '' ? path.join( pathConfig.appPath, targetPath ) : pathConfig.appPath;
        const BUILD_DIR = targetDir && targetDir != '' ? targetDir : null;
        targetPath && initPathConfig( targetPath, targetDir );

        // 检查运行环境
        const isPass = await checkRunDevDependencies();
        if ( !isPass ) {
            resolve( false );
        }
        // 检查目录是否存在
        if ( !fs.existsSync( BUILD_PATH ) ) {
            errorlog( `Could not find ${BUILD_PATH}!` );
            resolve( false );
            return;
        }

        if ( targetDir ) {
            const dirPaht = path.join( BUILD_PATH, './src', targetDir );
            if ( !fs.existsSync( path.join( dirPaht ) ) ) {
                errorlog( `Could not find ${dirPaht}!` );
                resolve( false );
                return;
            }
        }

        

        detectorClone();

        getWebpcakConfig( {
            buildPath: BUILD_PATH,
            buildDir: targetDir,
            env,
            options,
            config
        } )
            .then( ( webpackConfig ) => {
                return removeOutputDir( webpackConfig, options );
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack base config successfully!' );
                return getWebpackEntry( webpackConfig, BUILD_PATH, BUILD_DIR, options )
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack entry config successfully!' );
                return getWebpackBuildRules( webpackConfig, targetDir, options );
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack rule config successfully!' );
                return new Promise((res) => {
                    smartEntry(clearOtherWebpackConfig( webpackConfig ));
                    res();
                })
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

module.exports = publish;