const { spawnSync } = require( 'child_process' );
const { pathConfig } = require( './path' );

module.exports = function runCommand ( command, opt ) {

    return new Promise((resolve) => {
        const result = spawnSync( command, opt, {
            cwd: pathConfig.appPath,
            stdio: 'inherit'
        } );
        resolve(result.status == 0 ? true : false);
    });

    
}