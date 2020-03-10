const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;
    const { fontDir } = pathConfig;

    const fontFile = /\.(?:ttf|eot|woff|woff2|svg)$/i;

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