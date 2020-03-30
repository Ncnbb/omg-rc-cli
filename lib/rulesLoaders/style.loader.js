const Typeof = require( '../utils/typeof' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const autoprefixer = require( 'autoprefixer' );
const browserslist = require( '../utils/browserslist' );
const os = require( 'os' );

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
                ident: require.resolve('postcss'),
                plugins: [
                    autoprefixer( autoprefixerOptions )
                ]
            }
        }

        const SASS_LOADER = {
            loader: require.resolve( 'sass-loader' ),
            options: SASS_LOADER_OPTION
        }

        const THREAD_LOADER = {
            loader: require.resolve( 'thread-loader' ),
            options: {
              // worker的数量，默认是cpu核心数
              workers: os.cpus().length,
        
              // 一个worker并行的job数量，默认为20
              workerParallelJobs: 50,
        
              // 添加额外的node js 参数
              workerNodeArgs: ['--max-old-space-size=1024'],
        
        
              // 允许重新生成一个dead work pool
              // 这个过程会降低整体编译速度
              // 开发环境应该设置为false
              poolRespawn: false,
        
        
              //空闲多少秒后，干掉work 进程
              // 默认是500ms
              // 当处于监听模式下，可以设置为无限大，让worker一直存在
              poolTimeout: 3000,
        
              // pool 分配给workder的job数量
              // 默认是200
              // 设置的越低效率会更低，但是job分布会更均匀
              poolParallelJobs: 50,
        
              name: "style-pool"
            }
          }

        // css的默认配置
        this.CSS_RULES = [
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
                name: 'css-loader',
                rule: CSS_LOADER
            },
            {
                name: 'postcss-loader',
                rule: POSTCSS_LOADER
            },
            {
                name: 'thread_loader',
                rule: THREAD_LOADER
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

        // 如果开启了热更新，那么默认的scss和css的导出将转为内联功能，否则修改样式不能正常更新页面
        if ( config.devServer && config.devServer.hot ) {
            this.CSS_RULES.unshift({
                name: 'style-loader',
                rule: STYLE_LOADER
            });
            this.SCSS_RULES.unshift({
                name: 'style-loader',
                rule: STYLE_LOADER
            });
        } else {
            this.CSS_RULES.unshift({
                name: 'MiniCssExtractPlugin',
                rule: MINI_CSS_EXTRACT_PLUGIN
            });
            this.SCSS_RULES.unshift({
                name: 'MiniCssExtractPlugin',
                rule: MINI_CSS_EXTRACT_PLUGIN
            });
        }
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