const { pathConfig } = require( '../utils/path' );
const Typeof = require('../utils/typeof');
const autoprefixer = require('autoprefixer');
const browserslist = require('../utils/browserslist')

module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;
    const { appPath } = pathConfig;


    function isCSSFile(filePath) {
        return /\.css$/i.test(filePath) && !/\.module\.css$/i.test(filePath);
    }

    function isCSSModulesFile(filePath) {
        return /\.module\.css$/i.test(filePath);
    }

    const STYLE_LOADER_OPTION = {};
    const CSS_LOADER_OPTION = {};
    const CSS_MODULES_LOADER_OPTION = Object.assign({}, CSS_LOADER_OPTION, {
        modules: true,
        localsConvention: 'camelCase',
    });
    const SASS_LOADER_OPTION = {};

    let autoprefixerOptions = {};
	if (Typeof.isArray(browserslist)) {
		autoprefixerOptions.overrideBrowserslist = browserslist.slice(0);
    }

    // xx.module.css进行css module处理
    rules.push({
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
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [
                        autoprefixer(autoprefixerOptions)
                    ]
                }
            }
        ]
    })

    // 普通css处理
    rules.push( {
        test: isCSSFile,
        use: [
            {
                loader: require.resolve( 'style-loader' ),
                options: STYLE_LOADER_OPTION
            },
            {
                loader: require.resolve( 'css-loader' ),
                options: CSS_LOADER_OPTION
            },
            {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [
                        autoprefixer(autoprefixerOptions)
                    ]
                }
            }
        ]
    } );

    return config;
}