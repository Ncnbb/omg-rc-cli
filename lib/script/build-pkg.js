const Loading = require( '../extension/console/loading' );
const log = require( '../extension/console/log' );
const errorlog = require( '../extension/console/errorLog' );
const infoLog = require( '../extension/console/infoLog' );
const getRollupConfigFile = require( '../rollup-utils/getRollupConfigFile' );
const createRollupBuild = require('../rollup-utils/createRollupBuild');
let loading = null;

function build ( env, options ) {

    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
    process.env.OMG_ENV = 'development';

    return new Promise( async ( resolve ) => {

        try {
            loading = new Loading( 'build preparation' );
            loading.update( 'run get omg-pkg config...' );

            getRollupConfigFile( process.cwd() )
                .then( ( buildConfig ) => {
                    console.log( buildConfig );
                    log( 'run get omg-pkg config complete!' );
                    loading.update( 'run omg-pkg build...' );
                    return createRollupBuild(buildConfig);
                } )
                .then(() => {
                    resolve(true);
                    loading.stop();
                })
                .catch( ( err ) => {
                    errorlog( `${err.message}\n${err.stack}` );
                    loading.stop();
                    resolve( false );
                } )
        } catch ( err ) {
            errorlog( `${err.message}\n${err.stack}` );
            loading.stop();
            resolve( false );
        }

    } );

}

module.exports = build;