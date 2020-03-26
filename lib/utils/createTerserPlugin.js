
const TerserPlugin = require( 'terser-webpack-plugin' );
const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
const mergeObject = require('../utils/mergeObject');

module.exports = function ( config ) {

    const DEFAULT_TERSER_OPTION = {
        parse: {
            ecma: 8,
        },
        compress: {
            drop_console: false,
            drop_debugger: true,
            ecma: 5,
            comparisons: false,
            warnings: false,
            inline: 2,
            collapse_vars: true,
            reduce_vars: true
        },
        mangle:{
            safari10: true
        },
        output: {
            ecma: 5,
            ascii_only: true,
            beautify: false, // 最紧凑的输出
            comments: false, // 删除所有的注释
            safari10: true
        }
    }
    
    // 外包传入，将智能合并
    let terserOptions = config.terser ? mergeObject(DEFAULT_TERSER_OPTION, config.terser) : DEFAULT_TERSER_OPTION;
    return new TerserPlugin( {
        cache: !config.omg.noCache ? path.join( pathConfig.appCacheDir, 'terser-webpack-plugin' ) : false,
        parallel: true,
        sourceMap: false,
        extractComments: false,
        terserOptions: terserOptions
    } );
}