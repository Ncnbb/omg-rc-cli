const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
const getImageminConfig = require( '../utils/getImageminConfig' );
const babelConfig = require( '../utils/createBabelConfig' );

module.exports = class SVGLoaders {

    constructor( config ) {

        this.config = config;
        const { imageConfig, svGruntimeGenerator, omg } = this.config;
        const { filenameBefore } = omg;
        const { svgDir } = pathConfig;


        const OUTPUT_IMAGE_NAME = path.join( filenameBefore, svgDir, '[name].[ext]' );

        const IMAGE_WEBPACK_LOADER_CONFIG = imageConfig && imageConfig.compression ? imageConfig.compression : getImageminConfig();
        const DEFULT_SVGO_OPTIONS = IMAGE_WEBPACK_LOADER_CONFIG.svgo || {
            plugins: [
                {
                    removeViewBox: false,
                },
                {
                    removeEmptyAttrs: false,
                },
            ],
        };

        const SVG_SPRITE_RUNTIME_GENERATOR_PATH_NOT_REACT = require.resolve(
            path.join( __dirname, '../utils/svgSpriteLoaderRuntimeGeneratorNoReact.js' )
        );
        const SVG_SPRITE_RUNTIME_GENERATOR_PATH_REACT = svGruntimeGenerator || require.resolve(
            path.join( __dirname, '../utils/svgSpriteLoaderRuntimeGeneratorReact.js' )
        );

        const DEFAULT_SVG_SPRITE_OPTION = {
            esModule: true,
        }

        const SVG_SPRITE_NO_REACT_OPTION = Object.assign( {
            runtimeGenerator: SVG_SPRITE_RUNTIME_GENERATOR_PATH_NOT_REACT
        }, DEFAULT_SVG_SPRITE_OPTION );

        const SVG_SPRITE_REACT_OPTION = Object.assign( {
            runtimeGenerator: SVG_SPRITE_RUNTIME_GENERATOR_PATH_REACT
        }, DEFAULT_SVG_SPRITE_OPTION );

        // 图片优化只会在生产模式下生效
        let loaderSliceMax = 1;
        if ( config.mode == 'production' ) {
            loaderSliceMax = 2;
        }

        const SVG_URL_LOADER = {
            loader: require.resolve( 'svg-url-loader' ),
            options: {
                encoding: 'base64',
            }
        }

        const FILE_LOADER = {
            loader: require.resolve( 'file-loader' ),
            options: {
                name: OUTPUT_IMAGE_NAME,
            }
        };

        const IMAGE_WEBPACK_LOADER = {
            loader: require.resolve( 'image-webpack-loader' ),
            options: IMAGE_WEBPACK_LOADER_CONFIG
        }

        const SVG_SPRITE_LOADER = {
            loader: require.resolve( 'svg-sprite-loader' ),
            options: SVG_SPRITE_NO_REACT_OPTION
        }

        const SVG_SPRITE_REACT_LOADER = {
            loader: require.resolve( 'svg-sprite-loader' ),
            options: SVG_SPRITE_REACT_OPTION
        }

        const BABEL_LOADER = {
            loader: require.resolve( 'babel-loader' ), // es6代码需要进行babel转换
            options: babelConfig( config, 'webpack' )
        }

        const SVGO_LOADER = {
            loader: require.resolve( 'svgo-loader' ),
            options: DEFULT_SVGO_OPTIONS
        }

        // svg强制内联处理
        this.SVG_INLIN = [
            {
                name: 'svg-url-loader',
                rule: SVG_URL_LOADER
            }
        ];

        // svg强制url处理
        this.SVG_URL = [
            {
                name: 'file-loader',
                rule: FILE_LOADER
            },
            {
                name: 'image-webpack-loader',
                rule: IMAGE_WEBPACK_LOADER
            }
        ].slice( 0, loaderSliceMax );

        // 使用svg精灵合并
        this.SVG_SPRITE = [
            {
                name: 'svg-sprite-loader',
                rule: SVG_SPRITE_LOADER
            },
            {
                name: 'svgo-loader',
                rule: SVGO_LOADER
            }
        ]

        // 默认处理，转为react
        this.SVG_SPRITE_REACT = [
            {
                name: 'babel-loader',
                rule: BABEL_LOADER
            },
            {
                name: 'svg-sprite-loader',
                rule: SVG_SPRITE_REACT_LOADER
            },
            {
                name: 'svgo-loader',
                rule: SVGO_LOADER
            }
        ];
    }

    svgSpriteReactLoader () {
        let use = [].concat( this.SVG_SPRITE_REACT );

        if ( this.config.loaderOpt && this.config.loaderOpt.svg_sprite_react ) {
            const newUse = this.config.loaderOpt.svg( this.SVG_SPRITE_REACT );
            use = newUse || use;
        }

        return use.reduce( ( result, item ) => {
            result.push( item.rule );
            return result;
        }, [] );
    }

    svgSpriteLoader () {
        let use = [].concat( this.SVG_SPRITE );

        if ( this.config.loaderOpt && this.config.loaderOpt.svg_sprite ) {
            const newUse = this.config.loaderOpt.svg( this.SVG_SPRITE );
            use = newUse || use;
        }

        return use.reduce( ( result, item ) => {
            result.push( item.rule );
            return result;
        }, [] );
    }

    svgUrlLoader () {
        let use = [].concat( this.SVG_URL );

        if ( this.config.loaderOpt && this.config.loaderOpt.svg_url ) {
            const newUse = this.config.loaderOpt.svg( this.SVG_URL );
            use = newUse || use;
        }

        return use.reduce( ( result, item ) => {
            result.push( item.rule );
            return result;
        }, [] );
    }

    svgInlineLoader () {
        let use = [].concat( this.SVG_INLIN );

        if ( this.config.loaderOpt && this.config.loaderOpt.svg_inline ) {
            const newUse = this.config.loaderOpt.svg( this.SVG_INLIN );
            use = newUse || use;
        }

        return use.reduce( ( result, item ) => {
            result.push( item.rule );
            return result;
        }, [] );
    }
}