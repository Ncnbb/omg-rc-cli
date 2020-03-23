const fs = require( 'fs' );
const path = require( 'path' );
const { pathConfig } = require( '../utils/path' );

module.exports = () => {

    const { appPath } = pathConfig;
    const OMG_CONFIG_FILE = path.resolve( appPath, 'omg.config.js' );

    if ( fs.existsSync( OMG_CONFIG_FILE ) ) {

        const customOMGConfig = require( OMG_CONFIG_FILE );
        return customOMGConfig;
    }
    return null;
}