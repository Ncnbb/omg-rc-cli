const glob = require( 'glob' );
const path = require( 'path' );
const { pathConfig } = require( '../utils/path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const OMGHtmlWebpackPlugin = require( 'omg-inject-html-webpack-plugin' );
const getTemplateName = require( '../utils/getTemplateName' );
module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;
    const { appPath } = pathConfig;
    const TEMPLATE_IDENTIFIER = '**/*.view.{handlebars,hbs}';
    const files = glob.sync( TEMPLATE_IDENTIFIER, {
        cwd: appPath
    } );

    if ( !files || files.length == 0 ) return config;

    files.forEach((htmlPath) => {
        const fileName = getTemplateName( htmlPath );

        // 只会处理入口文件同名的html
        if ( config.entry[fileName] ) {
            config.plugins.push(
                new HtmlWebpackPlugin( {
                    template: htmlPath,
                    filename: `${config.output.path}/${pathConfig.templateDir}/${fileName}.html`,
                    xhtml: true,
                    cache: false,
                    chunks: [fileName]
                } )
            );
        }
        
    });

    config.plugins.push(new OMGHtmlWebpackPlugin()); 

    return config;
}