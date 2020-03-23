const { pathConfig } = require( '../utils/path' );
const { isInline, isUrl } = require( '../utils/resourceQuery' );
const ImageLoaders = require('../rulesLoaders/image.loader');

module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;

    const regFile = /\.(jpe?g|png|gif|webp)$/i;

    const imageLoaders = new ImageLoaders(config);

    rules.push( {
        test: regFile,
        oneOf: [
            // 指定inline
            {
                resourceQuery: isInline,
                use: imageLoaders.imageInlineLoader()
            },
            // 指定通过url加载
            {
                resourceQuery: isUrl,
                use: imageLoaders.imageUrlLoader()
            },
            // 默认加载方式，超出8MB将使用url进行引入
            {
                use: imageLoaders.imageLoader()
            },
        ]
    } );

    return config;
}