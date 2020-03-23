const getWebpackBaseConfig = require( './webpack.config.base' );
const { pathConfig } = require( '../utils/path' );
const HardSourceWebpackPlugin = require( 'hard-source-webpack-plugin' );
const path = require( 'path' );

function getWebpackConfig ( buildPath ) {

    const config = getWebpackBaseConfig(buildPath);

    config.mode = 'production';
    config.devtool = 'none';
    // config.devtool = 'cheap-module-eval-source-map';
    // config.pathinfo = true;

    // 高速缓存
    config.plugins.push(
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
            mode: 'none',
            level: 'log',
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

    return config;
}

module.exports = getWebpackConfig;