const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
const getImageminConfig = require( '../utils/getImageminConfig' );

module.exports = class ImageLoaders {

    constructor( config ) {

        this.config = config;
        const { imageConfig } = this.config;
        const { imageDir } = pathConfig;

        const IMAGEWEBPACKLOADERCONFIG = imageConfig && imageConfig.compression ? imageConfig.compression : getImageminConfig();
        const OUTPUT_IMAGE_NAME = path.join( imageDir, '[name]-[hash].[ext]' );

        // 图片优化只会在生产模式下生效
        let loaderSliceMax = 1;
        if ( config.mode == 'production' ) {
            loaderSliceMax = 2;
        }

        const URL_LOADER = {
            loader: require.resolve( 'url-loader' ),
            options: {
                name: OUTPUT_IMAGE_NAME,
            }
        };
        const DEFAULT_URL_LOADER = {
            loader: require.resolve( 'url-loader' ),
            options: {
                limit: imageConfig && imageConfig.limit != null ? imageConfig.limit : 8192,
                name: OUTPUT_IMAGE_NAME,
            }
        };

        const IMAGE_WEBPACK_LOADER = {
            loader: require.resolve( 'image-webpack-loader' ),
            options: IMAGEWEBPACKLOADERCONFIG
        }

        const FULE_LOADER = {
            loader: require.resolve( 'file-loader' ),
            options: {
                name: OUTPUT_IMAGE_NAME,
            }
        }
        // 指定inline
        this.IMAGE_INLINE_RULE = [
            {
                name: 'url-loader',
                rule: URL_LOADER
            },
            {
                name: 'image-webpack-loader',
                rule: IMAGE_WEBPACK_LOADER
            }
        ].slice( 0, loaderSliceMax );
        // 指定通过url加载
        this.IMAGE_URL_RULE = [
            {
                name: 'file-loader',
                rule: FULE_LOADER
            },
            {
                name: 'image-webpack-loader',
                rule: IMAGE_WEBPACK_LOADER
            }
        ].slice( 0, loaderSliceMax );

        // 默认加载方式，超出8MB将使用url进行引入
        this.IMAGE_DEFAULT_RULE = [
            {
                name: 'url-loader',
                rule: DEFAULT_URL_LOADER
            },
            {
                name: 'image-webpack-loader',
                rule: IMAGE_WEBPACK_LOADER
            }
        ].slice( 0, loaderSliceMax );
    }

    imageLoader () {
        let use = [].concat( this.IMAGE_DEFAULT_RULE );

        if ( this.config.loaderOpt && this.config.loaderOpt.image ) {
            const newUse = this.config.loaderOpt.scss( this.IMAGE_DEFAULT_RULE );
            use = newUse || use;
        }

        return use.reduce( ( result, item ) => {
            result.push( item.rule );
            return result;
        }, [] );
    }

    imageInlineLoader () {
        let use = [].concat( this.IMAGE_INLINE_RULE );

        if ( this.config.loaderOpt && this.config.loaderOpt.image_inline ) {
            const newUse = this.config.loaderOpt.scss( this.IMAGE_INLINE_RULE );
            use = newUse || use;
        }

        return use.reduce( ( result, item ) => {
            result.push( item.rule );
            return result;
        }, [] );
    }

    imageUrlLoader () {
        let use = [].concat( this.IMAGE_URL_RULE );

        if ( this.config.loaderOpt && this.config.loaderOpt.image_url ) {
            const newUse = this.config.loaderOpt.scss( this.IMAGE_URL_RULE );
            use = newUse || use;
        }

        return use.reduce( ( result, item ) => {
            result.push( item.rule );
            return result;
        }, [] );
    }
}