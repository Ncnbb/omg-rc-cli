const fs = require( 'fs' );
const path = require( 'path' );
const { pathConfig } = require( '../utils/path' );
const {isFunction} = require('./typeof');
module.exports = (env) => {

    const { appPath } = pathConfig;
    const OMG_CONFIG_FILE = path.resolve( appPath, 'omg.config.js' );

    if ( fs.existsSync( OMG_CONFIG_FILE ) ) {

        const customOMGConfig = require( OMG_CONFIG_FILE );

        if ( isFunction ) {
            return customOMGConfig(env)
        } else {
            return customOMGConfig;
        }
    }
    return null;
}