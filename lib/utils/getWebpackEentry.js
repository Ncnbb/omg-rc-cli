const glob = require( 'glob' );
const fs = require( 'fs' );
const path = require( 'path' );

function selectOneEntryJSFile(files) {
    let file = files[0];
    for ( let i = 0; i < files.length; i++ ) {
        if ( file.includes('index') ) {
            file = files[i];
            break;
        }
    }
    return file;
}

module.exports = async ( config, buildPath, buildDir, options, env ) => {
    return new Promise( ( resolve, reject ) => {

        // 判断是否关闭自动寻找入口
        if (!config.omg.autoFindEntry) {
            resolve(config);
            return;
        }

        let entry = {};
        let srcPath = path.resolve( buildPath, './src' );
        // 传入指定的目录进行打包
        if ( buildDir ) {
            srcPath = path.resolve( buildPath, './src', buildDir );
        }
        // 默认在运行目录下查询src目录下的文件查询入口
        const dirList = fs.readdirSync( srcPath );
        if (options.target) {
            const targetPath = options.target;
            const dirName = targetPath;
            const files = glob.sync( `${dirName}/js/?(${dirName}|index).?(js|jsx|ts|tsx)`, {
                cwd: srcPath,
                root: srcPath
            } );
            
            // 可以同时兼容于文件名一致的入口名称，或者index，当目录下存在2个文件的时候，默认取index（index权重更大）
            if ( files.length > 1 ) {
                const file = selectOneEntryJSFile(files);
                entry[dirName] = path.join( srcPath, file );
                isEmpty = false;
            } else if ( files && files.length > 0 ) {
                entry[dirName] = path.join( srcPath, files[0] );
                isEmpty = false;
            }

        } else if ( dirList && dirList.length > 0 ) {
            let isEmpty = true;
            for ( let i = 0; i < dirList.length; i++ ) {
                const dirName = dirList[i];
                const files = glob.sync( `${dirName}/js/?(${dirName}|index).?(js|jsx|ts|tsx)`, {
                    cwd: srcPath,
                    root: srcPath
                } );

                // 可以同时兼容于文件名一致的入口名称，或者index，当目录下存在2个文件的时候，默认取index（index权重更大）
                if ( files.length > 1 ) {
                    const file = selectOneEntryJSFile(files);
                    entry[dirName] = path.join( srcPath, file );
                    isEmpty = false;
                } else if ( files && files.length > 0 ) {
                    entry[dirName] = path.join( srcPath, files[0] );
                    isEmpty = false;
                }
            }

            if ( isEmpty ) reject( new Error( 'No entry documents were found' ) );
        } else {
            entry = null;
        }
        if ( !entry ) {
            reject( new Error( 'No entry documents were found' ) );
        }
        config.entry = config.entry ? Object.assign(entry, config.entry) : entry;
        if(env.alone && env.alone !== 'all'){
            const alones = env.alone.split(',')
            config.entry = Object.fromEntries(
              Object.entries(config.entry).filter(([key]) => alones.includes(key))
            );
        }
        resolve( config );
    } );
}