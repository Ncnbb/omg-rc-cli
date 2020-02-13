const glob = require( 'glob' );
const fs = require( 'fs' );
const path = require( 'path' );
const getFileName = require( './getFileName' );

module.exports = async ( buildPath, buildDir ) => {
    return new Promise( ( resolve ) => {
        let entry;
        // 传入指定的目录进行打包
        if ( buildDir ) {
            const files = glob.sync( `${buildDir}/js/*.?(js|jsx)`, {
                cwd: buildPath,
                root: buildPath
            } );
            // 如果匹配多个结果，那么只取最后的结果
            if ( files && files.length > 0 ) {
                entry = {};
                const file = files[files.length - 1];
                entry[getFileName( file )] = path.join( buildPath, file );
            }

            // 不指定单一目录打包
        } else {
            const files = glob.sync( `*/js/*.?(js|jsx)`, {
                cwd: buildPath,
                root: buildPath
            } );
            if (files && files.length > 0) {
                entry = {};
            }
            for ( let i = 0; i < files.length; i++ ) {
                entry[getFileName( files[i] )] = path.join( buildPath, files[i] );
            }
        }
        resolve( entry );
    } );
}