const path = require( 'path' );
const { isObject } = require( '../typeof' );
const findRely = require( './findRely' );
const getFileType = require( './getFileType' );
const { getToCache } = require( './cache' );
const compareMap = require( './compareMap' );
const SmartEntryCachePlugin = require( '../../plugins/smartEntryCache-plugin' );
const infoLog = require('../../extension/console/infoLog');
const log = require('../../extension/console/log');

module.exports = function smartEntry ( webpackConfig ) {

    if ( !webpackConfig || !isObject( webpackConfig.entry ) ) return;

    infoLog('open smart entry');
    infoLog('runing smart entry......');

    const { entry, resolve, plugins } = webpackConfig;

    const entryRelyMap = {};
    const noSmartEntryList = [];
    const inlineEntryList = {};
    for ( let key in entry ) {
        if ( entry[key].indexOf( '?__inline' ) != -1 ) {
            inlineEntryList[key] = entry[key];
            continue;
        };
        if ( entry[key].indexOf( '?__no_smart' ) != -1 ) {
            noSmartEntryList.push( key );
            continue;
        };
        entryRelyMap[key] = {};
        const { ext } = path.parse( entry[key] );
        const result = findRely( getFileType( ext ), key, entry[key], resolve );
        entryRelyMap[key] = result;
    }

    const cacheJSON = getToCache();

    let buildEntryList = [];
    if ( cacheJSON ) {
        infoLog('smart entry compare cache rely and new rely......');
        buildEntryList = [...compareMap( cacheJSON, entryRelyMap ), ...noSmartEntryList];
    } else {
        infoLog('smart entry no cache info!');
        buildEntryList = [...Object.keys( entryRelyMap ), ...noSmartEntryList];
    }

    let newEntry = {};
    for ( let i = 0; i < buildEntryList.length; i++ ) {
        if ( entry[buildEntryList[i]] ) {
            newEntry[buildEntryList[i]] = entry[buildEntryList[i]];
        }
    }

    infoLog('smart entry compare done!');
    if ( Object.keys( newEntry ).length != 0 ) {
        newEntry = { ...newEntry, ...inlineEntryList };
        if (cacheJSON) {
            log(`you original entry [${Object.keys(entry).join(',')}]`);
            log(`---------------------------------`);
            log(`you new entry [${Object.keys(newEntry).join(',')}]`);
        }
    } else {
        log('you not build! exit the omg!');
        process.exit( 0 );
    }
    // 在输出文件后再进行缓存
    plugins.push( new SmartEntryCachePlugin( { data: entryRelyMap } ) );
    return newEntry;
}