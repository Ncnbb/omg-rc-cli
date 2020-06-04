const rollup = require( 'rollup' );

module.exports = function createRollupBuild ( config ) {
    return new Promise( async ( res, rej ) => {
        const { inputOptions, outputOptions } = config;
        const bundle = await rollup.rollup( inputOptions );
        await bundle.write( outputOptions );
        res();
    } )
}