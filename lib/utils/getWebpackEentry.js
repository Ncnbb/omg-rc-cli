const glob = require( 'glob' );
const fs = require( 'fs' );
const path = require( 'path' );
const getFileName = require( './getFileName' );
const {changeOutputPath} = require('../utils/path');

module.exports = async ( config, buildPath, buildDir ) => {
    return new Promise( ( resolve, reject ) => {
        let entry = {};
        let srcPath = path.resolve( buildPath, './src' );
        // 传入指定的目录进行打包
        if ( buildDir ) {
            srcPath = path.resolve( buildPath, './src', buildDir );
        }

        // 默认在运行目录下查询src目录下的文件查询入口
        const dirList = fs.readdirSync( srcPath );
        if ( dirList && dirList.length > 0 ) {

            for ( let i = 0; i < dirList.length; i++ ) {
                const dirName = dirList[i];
                const files = glob.sync( `${dirName}/js/${dirName}.?(js|jsx|ts|tsx)`, {
                    cwd: srcPath,
                    root: srcPath
                } );
                if ( files && files.length > 0 ) {
                    entry[getFileName( files[0] )] = path.join( srcPath, files[0] );
                }
            }
        } else {
            entry = null;
        }

        if ( !entry ) {
            reject( new Error( 'No entry documents were found' ) );
        }

        config.entry = entry;

        resolve( config );
    } );
}