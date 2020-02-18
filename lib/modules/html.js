const glob = require( 'glob' );
const path = require( 'path' );
const pathConfig = require( '../utils/path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const OMGHtmlWebpackPlugin = require( 'omg-inject-html-webpack-plugin' );
const getTemplateName = require( '../utils/getTemplateName' );
module.exports = ( config ) => {
    const { module, plugins } = config;
    const { rules } = module;
    const { appPath } = pathConfig;
    const TEMPLATE_IDENTIFIER = '**/*.view.{handlebars,hbs}';
    const files = glob.sync( TEMPLATE_IDENTIFIER, {
        cwd: appPath
    } );

    if ( !files || files.length == 0 ) return config;

    files.forEach((htmlPath) => {
        const fileName = getTemplateName( htmlPath );
        config.plugins.push(
            new HtmlWebpackPlugin( {
                template: htmlPath,
                filename: `${pathConfig.appDist}/${pathConfig.templateDir}/${fileName}.html`,
                xhtml: true,
                chunks: [fileName]
            } )
        );
    });

    config.plugins.push(new OMGHtmlWebpackPlugin()); 

    // 添加hbs的编译loader
    rules.unshift( {
        test: /\.view\.(handlebars|hbs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: require.resolve( 'handlebars-loader' ),
        }
    } );

    return config;
}