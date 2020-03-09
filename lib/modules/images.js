const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
const getImageminConfig = require( '../utils/getImageminConfig' );
const { isInline, isDefault, isUrl } = require( '../utils/resourceQuery' );
module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;
    const { imageDir } = pathConfig;

    const regFile = /\.(jpe?g|png|gif|webp)$/i;

    const OUTPUT_IMAGE_NAME = path.join( imageDir, '[name].[ext]' );

    const IMAGEWEBPACKLOADERCONFIG = getImageminConfig();

    rules.push( {
        test: regFile,
        oneOf: [
            // 指定inline
            {
                resourceQuery: isInline,
                use: [
                    {
                        loader: require.resolve( 'url-loader' ),
                        options: {
                            name: OUTPUT_IMAGE_NAME,
                        }
                    },
                    {
                        loader: require.resolve( 'image-webpack-loader' ),
                        options: IMAGEWEBPACKLOADERCONFIG
                    }
                ]
            },
            // 指定通过url加载
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
                        options: IMAGEWEBPACKLOADERCONFIG
                    }
                ]
            },
            // 默认加载方式，超出8MB将使用url进行引入
            {
                use: [
                    {
                        loader: require.resolve( 'url-loader' ),
                        options: {
                            limit: 8192,
                            name: OUTPUT_IMAGE_NAME,
                        }
                    },
                    {
                        loader: require.resolve( 'image-webpack-loader' ),
                        options: IMAGEWEBPACKLOADERCONFIG
                    }
                ]
            },
        ]
    } );

    return config;
}