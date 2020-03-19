const { pathConfig } = require( '../utils/path' );
const Typeof = require( '../utils/typeof' );
const autoprefixer = require( 'autoprefixer' );
const browserslist = require( '../utils/browserslist' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const path = require( 'path' );
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');

module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;
    const { appDist, cssDir } = pathConfig;

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

    // style 配置
    const STYLE_LOADER_OPTION = {};

    // css配置
    const CSS_LOADER_OPTION = {};
    // css-modules配置
    const CSS_MODULES_LOADER_OPTION = Object.assign( {}, CSS_LOADER_OPTION, {
        modules: {
            mode: 'local',
            localIdentName: '[local]--[hash:base64:5]', // 名字生成规则
        },
        // localsConvention: 'camelCase',
    } );

    // scss配置
    const SASS_LOADER_OPTION = {
        sassOptions: {
            outputStyle: 'compressed',
        },
    };

    let autoprefixerOptions = {};
    if (config.browserslist && Typeof.isArray( config.browserslist )) {
        autoprefixerOptions.overrideBrowserslist = config.browserslist.slice( 0 );
    } else {
        autoprefixerOptions.overrideBrowserslist = browserslist.slice( 0 );
    }

    // xx.module.css进行css module处理
    rules.push( {
        test: isCSSModulesFile,
        use: [
            {
                loader: require.resolve( 'style-loader' ),
                options: STYLE_LOADER_OPTION
            },
            {
                loader: require.resolve( 'css-loader' ),
                options: CSS_MODULES_LOADER_OPTION
            },
            {
                loader: require.resolve( 'postcss-loader' ),
                options: {
                    ident: 'postcss',
                    plugins: [
                        autoprefixer( autoprefixerOptions )
                    ]
                }
            }
        ]
    } );

    // 普通css处理
    rules.push( {
        test: isCSSFile,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: require.resolve( 'css-loader' ),
                options: CSS_LOADER_OPTION
            },
            {
                loader: require.resolve( 'postcss-loader' ),
                options: {
                    ident: 'postcss',
                    plugins: [
                        autoprefixer( autoprefixerOptions )
                    ]
                }
            }
        ]
    } );

    // 普通scss处理
    rules.push( {
        test: isSCSSFile,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: require.resolve( 'css-loader' ),
                options: CSS_LOADER_OPTION
            },
            {
                loader: require.resolve( 'postcss-loader' ),
                options: {
                    ident: 'postcss',
                    plugins: [
                        autoprefixer( autoprefixerOptions )
                    ]
                }
            },
            {
                loader: require.resolve( 'sass-loader' ),
                options: SASS_LOADER_OPTION
            }
        ]
    } );

    // xx.module.scss module处理
    rules.push( {
        test: isSCSSModulesFile,
        use: [
            {
                loader: require.resolve( 'style-loader' ),
                options: STYLE_LOADER_OPTION
            },
            {
                loader: require.resolve( 'css-loader' ),
                options: CSS_MODULES_LOADER_OPTION
            },
            {
                loader: require.resolve( 'postcss-loader' ),
                options: {
                    ident: 'postcss',
                    plugins: [
                        autoprefixer( autoprefixerOptions )
                    ]
                }
            },
            {
                loader: require.resolve( 'sass-loader' ),
                options: SASS_LOADER_OPTION
            }
        ]
    } );

    // css导出插件
    config.plugins.push(
        new MiniCssExtractPlugin( {
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: path.join( cssDir, '[name].css' ),
            chunkFilename: path.join( cssDir, '[name].chunk.css' ),
        } )
    );

    // css单独压缩
    if ( config.mode == 'production' ) {

        // 默认使用cssnano https://cssnano.co/guides/optimisations
        config.plugins.push(
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: false,
                    parser: safePostCssParser
                }
            })
        )
    }
    

    return config;
}