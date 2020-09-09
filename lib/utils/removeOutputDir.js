const fs = require( 'fs' );
const path = require( 'path' );
const log = require( '../extension/console/log' );
const infoLog = require( '../extension/console/infoLog' );
const warnlog = require( '../extension/console/warnlog' );
const { pathConfig } = require( '../utils/path' );
async function rmdirAsync ( filePath ) {

    if (!fs.existsSync(filePath)) return;

    let stat = fs.statSync( filePath )
    if ( stat.isFile() ) {
        fs.unlinkSync( filePath );
    } else {
        let dirs = fs.readdirSync( filePath );
        dirs = dirs.map( dir => path.join( filePath, dir ) );
        for ( let i = 0; i < dirs.length; i++ ) {
            await rmdirAsync( dirs[i] );
        }
        if ( fs.readdirSync( filePath ).length == 0 ) {
            fs.rmdirSync( filePath );
        }
    }
}

module.exports = async ( config, options ) => {
    return new Promise( async ( resolve, reject ) => {

        const { remove } = options;
        const { output, omg } = config;

        
        if ( remove && fs.existsSync( output.path ) && !omg.smartEntry ) {

            // 如果开启了smartEntry，那么remove将会失效
            if ( omg && omg.smartEntry ) {
                warnlog('You open the smartEntry option,so --remove option is disable！');
                resolve(config);
                return;
            }

            log( 'remove output dir!' );
            // 删除的文件是指定输出的文件，不会删除额外的文件，其中包含js, html, images, css, fonts, svg
            await rmdirAsync( path.join( output.path, pathConfig.templateDir ) );
            await rmdirAsync( path.join( output.path, pathConfig.jsDir ) );
            await rmdirAsync( path.join( output.path, pathConfig.cssDir ) );
            await rmdirAsync( path.join( output.path, pathConfig.imageDir ) );
            await rmdirAsync( path.join( output.path, pathConfig.fontDir ) );
            await rmdirAsync( path.join( output.path, pathConfig.svgDir ) );
            infoLog( 'remove output dir success!' );
        }

        resolve( config );
    } );
}