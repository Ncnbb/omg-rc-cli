const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;
    const { fontDir } = pathConfig;

    // 因为iconfont与直接使用svg或导致重复的，所以字体文件中的svg会输出到svg文件夹中
    // const fontFile = /\.(?:ttf|eot|woff|woff2|svg)$/i;
    const fontFile = /\.(?:ttf|eot|woff|woff2)$/i;

    const OUTPUT_FONT_NAME = path.join( fontDir, '[name]-[hash:8].[ext]' );

    rules.push( {
        test: fontFile,
        use: [
            {
                loader: require.resolve( 'file-loader' ),
                options: {
                    name: OUTPUT_FONT_NAME,
                }
            }
        ]
    } );

    return config;
}