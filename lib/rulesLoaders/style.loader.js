const Typeof = require( '../utils/typeof' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const autoprefixer = require( 'autoprefixer' );
const browserslist = require( '../utils/browserslist' )

module.exports = class StyleLoaders {

    constructor(config) {

        this.config = config;

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
        if ( config.browserslist && Typeof.isArray( config.browserslist ) ) {
            autoprefixerOptions.overrideBrowserslist = config.browserslist.slice( 0 );
        } else {
            autoprefixerOptions.overrideBrowserslist = browserslist.slice( 0 );
        }

        const STYLE_LOADER = {
            loader: require.resolve( 'style-loader' ),
            options: STYLE_LOADER_OPTION
        }

        const MINI_CSS_EXTRACT_PLUGIN = {
            loader: MiniCssExtractPlugin.loader
        };

        const CSS_LOADER = {
            loader: require.resolve( 'css-loader' ),
            options: CSS_LOADER_OPTION
        };

        const CSS_MODULES_LOADER = {
            loader: require.resolve( 'css-loader' ),
            options: CSS_MODULES_LOADER_OPTION
        };

        const POSTCSS_LOADER = {
            loader: require.resolve( 'postcss-loader' ),
            options: {
                ident: 'postcss',
                plugins: [
                    autoprefixer( autoprefixerOptions )
                ]
            }
        }

        const SASS_LOADER = {
            loader: require.resolve( 'sass-loader' ),
            options: SASS_LOADER_OPTION
        }

        // css的默认配置
        this.CSS_RULES = [
            {
                name: 'MiniCssExtractPlugin',
                rule: MINI_CSS_EXTRACT_PLUGIN
            },
            {
                name: 'css-loader',
                rule: CSS_LOADER
            },
            {
                name: 'postcss-loader',
                rule: POSTCSS_LOADER
            }
        ];

        // css module的默认配置
        this.CSS_MODULE_RULES = [
            {
                name: 'style-loader',
                rule: STYLE_LOADER
            },
            {
                name: 'css-loader',
                rule: CSS_MODULES_LOADER
            },
            {
                name: 'postcss-loader',
                rule: POSTCSS_LOADER
            }
        ];

        // scss的默认配置
        this.SCSS_RULES = [
            {
                name: 'MiniCssExtractPlugin',
                rule: MINI_CSS_EXTRACT_PLUGIN
            },
            {
                name: 'css-loader',
                rule: CSS_MODULES_LOADER
            },
            {
                name: 'postcss-loader',
                rule: POSTCSS_LOADER
            },
            {
                name: 'sass-loader',
                rule: SASS_LOADER
            }
        ];

        // scss module的默认配置
        this.SCSS_MODULE_RULES = [
            {
                name: 'style-loader',
                rule: STYLE_LOADER
            },
            {
                name: 'css-loader',
                rule: CSS_MODULES_LOADER
            },
            {
                name: 'postcss-loader',
                rule: POSTCSS_LOADER
            },
            {
                name: 'sass-loader',
                rule: SASS_LOADER
            }
        ];
    }

    cssLoader() {
        let use = [].concat(this.CSS_RULES);

        if (this.config.loaderOpt && this.config.loaderOpt.css) {
            const newUse = this.config.loaderOpt.scss(this.CSS_RULES);
            use = newUse || use;
        } 

        return use.reduce((result, item) => {
            result.push(item.rule);
            return result;
        }, []);
    }

    cssModuleLoader() {
        let use = [].concat(this.CSS_MODULE_RULES);

        if (this.config.loaderOpt && this.config.loaderOpt.cssModule) {
            const newUse = this.config.loaderOpt.scss(this.CSS_MODULE_RULES);
            use = newUse || use;
        } 

        return use.reduce((result, item) => {
            result.push(item.rule);
            return result;
        }, []);
    }

    scssLoader() {
        let use = [].concat(this.SCSS_RULES);

        if (this.config.loaderOpt && this.config.loaderOpt.scss) {
            const newUse = this.config.loaderOpt.scss(this.SCSS_RULES);
            use = newUse || use;
        } 

        return use.reduce((result, item) => {
            result.push(item.rule);
            return result;
        }, []);
    }

    scssModuleLoader() {
        let use = [].concat(this.SCSS_MODULE_RULES);

        if (this.config.loaderOpt && this.config.loaderOpt.scssModule) {
            const newUse = this.config.loaderOpt.scss(this.SCSS_MODULE_RULES);
            use = newUse || use;
        } 

        return use.reduce((result, item) => {
            result.push(item.rule);
            return result;
        }, []);
    }
}