
const path = require( 'path' );
const fs = require( 'fs' );
const Loading = require( '../extension/console/loading' );
const errorLog = require( '../extension/console/errorLog' );
const log = require( '../extension/console/log' );
const { pathConfig } = require('../utils/path');
const getDefaultPackage = require('../utils/getDefaultPackage');
let loading = null;
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

module.exports = async function (projectName) {
    return new Promise( ( resolve ) => {
        loading = new Loading( 'init project' );
        const projectPath = path.join(pathConfig.appPath, projectName)
        // task1
        _task( {
            updateText1: '1/6 check the project',
            updateText2: '2/6 create the project',
            doneText: 'create project done!',
            path: projectPath
        }, () => {
            _task( {
                updateText1: '3/6 check the project src',
                updateText2: '4/6 create the project src',
                doneText: 'create project src done!',
                path: path.join(projectPath, 'src')
            }, () => {
                loading.update( '5/6 create the project package.json', );
                fs.writeFileSync( path.join(projectPath, 'package.json'), JSON.stringify(getDefaultPackage(projectName), null, '\t'));
                loading.update( '6/6 create the project package.json done', );
                log( 'create the project package.json done'.blue, Date.now() - pre_time );
            })
        } );


        setTimeout( () => {
            loading.stop();
            resolve( true );
        }, 80 );
    } );
}