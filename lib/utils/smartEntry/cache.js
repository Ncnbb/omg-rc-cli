const path = require( 'path' );
const fs = require( 'fs' );
const { pathConfig } = require( '../path' );
const infoLog = require('../../extension/console/infoLog');
const errorLog = require('../../extension/console/errorLog');
const DIR_NAME = './.smartEntry';
const FILE_NAME = 'smartEntry.cacht.json';

module.exports = {
    saveToCache ( data ) {
        try {
            const DIR = path.resolve( pathConfig.appNodeModules, DIR_NAME );
            if ( !fs.existsSync( DIR ) ) fs.mkdirSync( DIR );

            // 输出结果
            fs.writeFileSync( path.resolve( DIR, FILE_NAME ), JSON.stringify( data, null, '\t' ) );
            infoLog('save smart entry cache success!')
        } catch(err) {
            errorLog('save smart entry cache error!');
            errorLog(err);
        }

    },

    getToCache () {

        const DIR = path.resolve( pathConfig.appNodeModules, DIR_NAME );
        const FILE_PATH = path.resolve( DIR, FILE_NAME );

        if ( !fs.existsSync( DIR ) || !fs.existsSync( FILE_PATH ) ) return null;

        const cache = fs.readFileSync( FILE_PATH, 'utf8' );
        try {
            return cache ? JSON.parse( cache ) : null
        } catch ( err ) {
            fs.unlink( FILE_PATH );
            return null;
        }
    }
} 