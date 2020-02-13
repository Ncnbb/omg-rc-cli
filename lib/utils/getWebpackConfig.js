const getWebpackEentry = require( './getWebpackEentry' );
const log = require('../extension/console/log');
const errorlog = require('../extension/console/errorLog');
module.exports = async ( cmdOpt ) => {
    return new Promise( async ( resolve ) => {
        const { buildPath, buildDir } = cmdOpt;
        const webpackConfig = {};
        const entry = await getWebpackEentry( buildPath, buildDir );
        // 确保一定有入口
        if ( !entry ) {
            errorlog('Failed to generate webpack configuration entry parameters. Check the directory for exceptions.');
            resolve(null);
            return;
        } else {
            log('Generated webpack configuration entry parameters successfully');
            webpackConfig['entry'] = entry;
        }
        resolve( webpackConfig );
    } );
}