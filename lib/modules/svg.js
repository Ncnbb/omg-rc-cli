const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
const getImageminConfig = require( '../utils/getImageminConfig' );
const { isInline, isSprite, isUrl } = require( '../utils/resourceQuery' );
const babelConfig = require( '../utils/createBabelConfig' );

module.exports = ( config ) => {
    const { module, imageConfig, svGruntimeGenerator } = config;
    const { rules } = module;
    const { svgDir } = pathConfig;

    const svgFile = /\.svg$/i;
    const OUTPUT_IMAGE_NAME = path.join( svgDir, '[name].[ext]' );

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

    rules.push( {
        test: svgFile,
        oneOf: [
            // svg强制内联处理
            {
                resourceQuery: isInline,
                use: [
                    {
                        loader: require.resolve( 'svg-url-loader' ),
                        options: {
                            encoding: 'base64',
                        }
                    }
                ]
            },
            // svg强制url处理
            {
                resourceQuery: isUrl,
                use: [
                    {
                        loader: require.resolve( 'file-loader' ),
                        options: {
                            name: OUTPUT_IMAGE_NAME,
                        }
                    },
                    {
                        loader: require.resolve( 'image-webpack-loader' ),
                        options: IMAGE_WEBPACK_LOADER_CONFIG
                    }
                ].slice(0, loaderSliceMax)
            },
            // 使用svg精灵合并
            {
                resourceQuery: isSprite,
                use: [
                    {
                        loader: require.resolve( 'svg-sprite-loader' ),
                        options: SVG_SPRITE_NO_REACT_OPTION
                    },
                    {
                        loader: require.resolve( 'svgo-loader' ),
                        options: DEFULT_SVGO_OPTIONS,
                    },
                ]
            },
            // 默认情况下使用react组件进行导出
            {
                use: [
                    {
                        loader: require.resolve('babel-loader'), // es6代码需要进行babel转换
                        options: babelConfig(config),
                    },
                    {
                        loader: require.resolve( 'svg-sprite-loader' ),
                        options: SVG_SPRITE_REACT_OPTION
                    },
                    {
                        loader: require.resolve( 'svgo-loader' ),
                        options: DEFULT_SVGO_OPTIONS,
                    },
                ]
            }
        ]

    } );

    return config;
}