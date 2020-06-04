const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const safePostCssParser = require( 'postcss-safe-parser' );
const createOuputFileName = require( '../utils/createOuputFileName' );
const StyleLoaders = require( '../rulesLoaders/style.loader' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = ( config, options ) => {
    const { module, omg } = config;
    const { filenameBefore } = omg;
    const { rules } = module;
    const { appDist, cssDir } = pathConfig;
    const { chunkhash } = options;
    // 纯css文件
    function isCSSFile ( filePath ) {
        return /\.css$/i.test( filePath ) && !/\.module\.css$/i.test( filePath );
    }

    // 需要使用css module的文件
    function isCSSModulesFile ( filePath ) {
        return /\.module\.css$/i.test( filePath );
    }

    // 纯scss文件
    function isSCSSFile ( filePath ) {
        return /\.s[ac]ss$/i.test( filePath ) && !/\.module\.s[ac]ss$/i.test( filePath );
    }

    // 需要使用scss module的文件
    function isSCSSModulesFile ( filePath ) {
        return /\.module\.s[ac]ss$/i.test( filePath );
    }

    // 初始化加载器
    const styleLoader = new StyleLoaders( config );

    // xx.module.css进行css module处理
    rules.push( {
        test: isCSSModulesFile,
        use: styleLoader.cssModuleLoader()
    } );

    // 普通css处理
    rules.push( {
        test: isCSSFile,
        use: styleLoader.cssLoader()
    } );

    // 普通scss处理
    rules.push( {
        test: isSCSSFile,
        use: styleLoader.scssLoader()
    } );

    // xx.module.scss module处理
    rules.push( {
        test: isSCSSModulesFile,
        use: styleLoader.scssModuleLoader()
    } );

    // css导出插件
    config.plugins.push(
        new MiniCssExtractPlugin( {
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: path.join( filenameBefore, cssDir, createOuputFileName( 'css', chunkhash ) ),
            chunkFilename: path.join( cssDir, createOuputFileName( 'csschunk', chunkhash ) ),
        } )
    );

    // css单独压缩
    if ( config.mode == 'production' ) {

        // 默认使用cssnano https://cssnano.co/guides/optimisations
        config.plugins.push(
            new OptimizeCssAssetsPlugin( {
                cssProcessorOptions: {
                    map: false,
                    parser: safePostCssParser
                }
            } )
        )
    }


    return config;
}