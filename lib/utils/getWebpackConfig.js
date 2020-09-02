const getWebpackDevConfig = require( '../config/webpack.config.dev' );
const getWebpackProConfig = require( '../config/webpack.config.pro' );
const mergeOMGConfig = require( '../utils/mergeOMGConfig' );
const getProjectConfig = require( '../utils/getProjectConfig' );
const { pathConfig, changeCacheDirPath } = require( '../utils/path' );
const HardSourceWebpackPlugin = require( 'hard-source-webpack-plugin' );
const path = require( 'path' );
const Jarvis = require( "webpack-jarvis" );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;
const jarvisConfig = require( '../config/jarvis.config' );
const analyzerConfig = require( '../config/analyzer.config' );
const createOuputFileName = require( '../utils/createOuputFileName' );
const OutputAssetsPlugin = require('../plugins/outputAssets-plugin');

module.exports = async ( cmdOpt ) => {
    return new Promise( async ( resolve, reject ) => {

        try {
            const { buildPath, buildDir, env, options, config = null } = cmdOpt;

            let webpackConfig = process.env.OMG_ENV == 'development' || process.env.OMG_ENV == 'server' ? getWebpackDevConfig( buildPath, options ) : getWebpackProConfig( buildPath, options );
            const customOMGConfig = config || getProjectConfig( env );
            // 合并配置
            webpackConfig = !!customOMGConfig ? mergeOMGConfig( webpackConfig, customOMGConfig ) : webpackConfig;

            const {omg} = webpackConfig;
            const {filenameBefore, openOutputAssets, outputAssetsDirName } = omg;
            if (filenameBefore && filenameBefore != '') {
                webpackConfig.output.filename = path.join(filenameBefore, pathConfig.jsDir, createOuputFileName( 'js', options.chunkhash ));
            }

            // 当指定src下某个目录进行打包的时候，output将会增加一层
            // 如果有指定output.dirName,那么将使用output.dirName
            if ( webpackConfig.output && webpackConfig.output.dirName != null ) {
                webpackConfig.output.path = path.resolve( webpackConfig.output.path, webpackConfig.output.dirName );
            } else if ( buildDir ) {
                webpackConfig.output.path = path.resolve( webpackConfig.output.path, buildDir );
            }

            // 是否配置全局缓存
            if ( webpackConfig.omg && webpackConfig.omg.cacheToGlobal ) {
                changeCacheDirPath( path.join( __dirname, '../../node_modules/.cache' ), buildDir );
            }

            // 是否开启资产输出 OutputAssets
            if ( openOutputAssets ) {
                webpackConfig.plugins.push(
                    new OutputAssetsPlugin({
                        path: path.resolve(webpackConfig.output.path, outputAssetsDirName)
                    })
                );
            }

            if ( process.env.OMG_ENV == 'production' ) {
                // 高速缓存
                if ( false && !webpackConfig.omg.noCache ) {
                    webpackConfig.plugins.push(
                        new HardSourceWebpackPlugin( {
                            cacheDirectory: path.join( pathConfig.appCacheDir, 'hard-source', '[confighash]' ),
                            configHash: function ( webpackConfig ) {
                                return require( 'node-object-hash' )( { sort: false } ).hash( webpackConfig );
                            },
                            environmentHash: {
                                root: pathConfig.appPath,
                                directories: [],
                                files: ['package-lock.json', 'yarn.lock']
                            },
                            info: {
                                mode: 'none',
                                level: options.console ? 'log' : 'none'
                            },
                            // Clean up large, old caches automatically.
                            cachePrune: {
                                // Caches younger than `maxAge` are not considered for deletion. They must
                                // be at least this (default: 2 days) old in milliseconds.
                                maxAge: 2 * 24 * 60 * 60 * 1000,
                                // All caches together must be larger than `sizeThreshold` before any
                                // caches will be deleted. Together they must be at least this
                                // (default: 50 MB) big in bytes.
                                sizeThreshold: 500 * 1024 * 1024
                            },
                        } )
                    )
                }
            }

            const { jarvis = false, jarvisOpt, analyzer = false, analyzerOpt } = webpackConfig;
            // 开启美化输出界面
            if ( jarvis ) {
                if ( jarvisOpt ) {
                    jarvisConfig.set( jarvisOpt );
                }
                webpackConfig.plugins.push(
                    new Jarvis( jarvisConfig.get() )
                )
            }
            // 开启包分析
            if ( analyzer ) {
                if ( analyzerOpt ) {
                    analyzerConfig.set( analyzerOpt );
                }
                webpackConfig.plugins.push(
                    new BundleAnalyzerPlugin( analyzerConfig.get() )
                )
            }

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