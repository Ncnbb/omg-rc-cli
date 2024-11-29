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
const createWebpackDevServerConfig = require( '../utils/createWebpackDevServerConfig' );
const webpackDevServer = require( 'webpack-dev-server' );
const address = require( 'address' );
const checkRunDevDependencies = require( '../utils/checkRunDevDependencies' );
const checkReactHotLoaderDependencies = require( '../utils/checkReactHotLoaderDependencies' );
const analyzerConfig = require('../config/analyzer.config');
const jarvisConfig = require('../config/jarvis.config');
let loading = null;

function server ( targetPath, targetDir, env, options, config = null ) {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
    process.env.OMG_ENV = 'server';
    process.env.OMG_CONSOLE = '1';

    let isOpenJarvis = false;
    let isOpenAnalyzer = false;

    return new Promise( async ( resolve ) => {

        const BUILD_PATH = targetPath && targetPath != '' ? path.join( pathConfig.appPath, targetPath ) : pathConfig.appPath;
        const BUILD_DIR = targetDir && targetDir != '' ? targetDir : null;
        targetPath && initPathConfig( targetPath, targetDir );

        // 检查运行环境
        const isPass = await checkRunDevDependencies();
        if ( !isPass ) {
            resolve( false );
        }

        // 检查是否进行react hot laoder版本检查
        const isPass_hot = await checkReactHotLoaderDependencies();
        if ( !isPass_hot ) {
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
            env,
            options,
            config
        } )
            .then( ( webpackConfig ) => {
                log( 'init webpack base config successfully!' );
                return getWebpackEntry( webpackConfig, BUILD_PATH, BUILD_DIR, options, env )
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack entry config successfully!' );
                return getWebpackBuildRules( webpackConfig, targetDir, options );
            } )
            .then( ( webpackConfig ) => {
                log( 'init webpack rule config successfully!' );
                loading.stop();
                isOpenJarvis = !!webpackConfig.jarvis;
                isOpenAnalyzer = !!webpackConfig.analyzer;
                webpackConfig = createWebpackDevServerConfig( webpackConfig, targetPath );
                return createWebpackCompiler( clearOtherWebpackConfig( webpackConfig ) );
            } )
            .then( ( data ) => {
                const { compiler, config } = data;
                const { devServer } = config;
                const { host, port } = devServer;
                delete devServer.host;
                delete devServer.port;
                compiler.hooks.done.tap( 'done', stats => {
                    let portocol = Boolean( devServer.https ) === false ? 'http' : 'https';
                    infoLog( `本地访问地址：${portocol}://${host}:${port}` );
                    infoLog( `外网访问地址：${portocol}://${address.ip()}:${port}` );
                    if (isOpenJarvis) {
                        infoLog( `美化输出：${portocol}://${host}:${jarvisConfig.get().port}` );
                    }
                    if (isOpenAnalyzer) {
                        infoLog( `依赖分析：${portocol}://${host}:${analyzerConfig.get().analyzerPort}` );
                    }
                } );

                const server = new webpackDevServer( compiler, devServer );
                server.listen( port, host, err => {
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