const glob = require( 'glob' )
const pathConfig = require( './path' );
const path = require( 'path' );

module.exports = () => {
    let hasBabelConfig = false;
    let files = glob.sync( './.babelrc', { cwd: pathConfig.appPath } );
    if ( files.length > 0 ) {
        hasBabelConfig = true;
    } else {
        files = glob.sync( './.babelrc.?(js|mjs|cjs)', { cwd: pathConfig.appPath } );
        if ( files.length > 0 ) {
            hasBabelConfig = true;
        } else {
            files = glob.sync( './babel.config.?(js|mjs|cjs)', { cwd: pathConfig.appPath } );
            if ( files.length > 0 ) {
                hasBabelConfig = true;
            }
        }
    }

    const configPath = files && files.length > 0 ? path.resolve( pathConfig.appPath, files[files.length - 1] ) : null;

    return { hasBabelConfig, path: configPath };
}