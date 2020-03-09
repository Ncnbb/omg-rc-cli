const glob = require( 'glob' );
const fs = require( 'fs' );
const path = require( 'path' );
const getFileName = require( './getFileName' );

module.exports = async ( config, buildPath, buildDir ) => {
    return new Promise( ( resolve, reject ) => {
        let entry = {};
        // 传入指定的目录进行打包
        if ( buildDir ) {
            const srcPath = path.resolve( buildPath, buildDir );
            let dirName = srcPath.split('/');
            dirName = dirName[dirName.length - 1];
            const files = glob.sync( `js/${dirName}.?(js|jsx|ts|tsx)`, {
                cwd: srcPath,
                root: srcPath
            } );

            // 如果匹配多个结果，那么只取最后的结果
            if ( files && files.length > 0 ) {
                entry = {};
                const file = files[files.length - 1];
                entry[getFileName( file )] = path.join( srcPath, file );
            } else {
                entry = null;
            }

            // 不指定单一目录打包
        } else {
            const srcPath = path.resolve( buildPath, './src' );
            const dirList = fs.readdirSync( srcPath );
            if ( dirList && dirList.length > 0 ) {

                for ( let i = 0; i < dirList.length; i++ ) {
                    const dirName = dirList[i];
                    const files = glob.sync( `${dirName}/js/${dirName}.?(js|jsx|ts|tsx)`, {
                        cwd: srcPath,
                        root: srcPath
                    } );
                    if (files && files.length > 0) {
                        entry[getFileName( files[0] )] = path.join( srcPath, files[0] );
                    }
                }
            } else {
                entry = null;
            }
        }
        if ( !entry ) {
            reject( new Error( 'No entry documents were found' ) );
        }

        config.entry = entry;

        resolve( config );
    } );
}