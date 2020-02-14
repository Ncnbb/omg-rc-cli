
const path = require( 'path' );
const fs = require( 'fs' );
const Loading = require( '../extension/console/loading' );
const errorLog = require( '../extension/console/errorLog' );
const log = require( '../extension/console/log' );
const pathConfig = require('../utils/path');
let loading = null;
const HTML_NAME = 'html';
const JAVASCRIPT_NAME = 'js';
const STYLE_NAME = 'style';
const IMAGES_NAME = 'images';
const CURR = Date.now();
let pre_time = CURR;

function _task ( data, cb ) {
    const {
        updateText1,
        updateText2,
        doneText,
        path
    } = data;
    // task1
    updateText1 && loading.update( updateText1 );
    if ( !fs.existsSync( path ) ) {
        updateText2 && loading.update( updateText2 );
        try {
            fs.mkdirSync( path );
        } catch ( err ) {
            errorLog( err );
            loading.stop();
            return false;
        }

        const task_time = Date.now() - pre_time;

        doneText && log( doneText.blue, task_time );


        cb && cb();
        return true;
    }
    return true;
}

module.exports = async function ( dirPath, name ) {
    return new Promise( ( resolve ) => {
        loading = new Loading( 'create dir' );
        const DIR_PATH = path.join( pathConfig.appPath, dirPath );
        const TARGET_DIR_PATH = path.join( DIR_PATH, name );

        // task1
        let is_done1 = _task( {
            updateText1: '1/8 check the dir path',
            updateText2: '2/8 create the dir path',
            doneText: 'create the dir path done!',
            path: DIR_PATH
        } );
        if (!is_done1) return resolve( false );

        // task2
        let is_done2 = _task( {
            updateText1: '3/8 create the target name dir path',
            updateText2: '4/8 create the target name dir path',
            doneText: 'create the the target name dir path!',
            path: TARGET_DIR_PATH,
        }, () => {
            // task3
            const HTML_DIR = path.join( TARGET_DIR_PATH, HTML_NAME );
            const JAVASCRIPT_DIR = path.join( TARGET_DIR_PATH, JAVASCRIPT_NAME );
            const STYLE_DIR = path.join( TARGET_DIR_PATH, STYLE_NAME );
            const IMAGES_DIR = path.join( TARGET_DIR_PATH, IMAGES_NAME );

            let is_done3 = _task( {
                updateText1: '5/8 create the html dir',
                doneText: 'create html dir done!',
                path: HTML_DIR
            } );
            if (!is_done3) return resolve( false );
            
            let is_done4 = _task( {
                updateText1: '6/8 create the javascript dir',
                doneText: 'create javascript dir done!',
                path: JAVASCRIPT_DIR
            } );
            if (!is_done4) return resolve( false );

            let is_done5 = _task( {
                updateText1: '7/8 create the style dir',
                doneText: 'create style dir done!',
                path: STYLE_DIR
            } );
            if (!is_done5) return resolve( false );

            let is_done6 = _task( {
                updateText1: '8/8 create the images dir',
                doneText: 'create images dir done!',
                path: IMAGES_DIR
            } );
            if (!is_done6) return resolve( false );
        } );
        if (!is_done2) return resolve( false );


        setTimeout( () => {
            loading.stop();
            resolve( true );
        }, 80 );
    } );
}