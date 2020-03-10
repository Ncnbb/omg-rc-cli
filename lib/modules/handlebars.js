const { pathConfig } = require( '../utils/path' );
const path = require( 'path' );
module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;
    const { appPath } = pathConfig;

    const hbsFile = /\.(hbs|handlebars)$/i;

    // 添加hbs的编译loader
    rules.push( {
        test:hbsFile,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: require.resolve( 'handlebars-loader' ),
            options: {
                helperDirs: appPath,
                partialDirs: appPath,
                runtime: require.resolve('handlebars/runtime')
            }
        }
    } );

    return config;
}