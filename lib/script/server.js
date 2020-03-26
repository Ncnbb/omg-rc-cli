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
const createWebpackDevServerConfig = require('../utils/createWebpackDevServerConfig');
const webpackDevServer = require( 'webpack-dev-server' );
const address = require('address');

let loading = null;

function server ( targetPath, targetDir, env ) {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
    process.env.OMG_ENV = 'server';
    return new Promise( async ( resolve ) => {
        loading = new Loading( 'build preparation' );

        const BUILD_PATH = targetPath && targetPath != '' ? path.join( pathConfig.appPath, targetPath ) : pathConfig.appPath;
        const BUILD_DIR = targetDir && targetDir != '' ? targetDir : null;
        targetPath && initPathConfig( targetPath );
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
                const {compiler, config} = data;
                const devServerConfig = createWebpackDevServerConfig(config, targetPath);
                const { host, prot } = devServerConfig;
                delete devServerConfig.host;
                delete devServerConfig.prot;
                compiler.hooks.done.tap('done', stats => {
                    let protocol = Boolean(devServerConfig.https) === false ? 'http' : 'https';
                    infoLog(`本地访问地址：${protocol}://${host}:${prot}`);
                    infoLog(`外网访问地址：${protocol}://${address.ip()}:${prot}`);
                });
                
                const server = new webpackDevServer( compiler, devServerConfig );
                server.listen( prot, host, err => {
                    err && console.log( err );
                } );

            } )
            .catch( ( err ) => {
                errorlog( err );
                loading.stop();
                resolve( false );
            } )
    } );

}

module.exports = server;