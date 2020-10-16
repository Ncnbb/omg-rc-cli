const path = require( 'path' );
const fs = require( 'fs' );
const crypto = require( 'crypto' );
const acornLoose = require( "acorn-loose" );
const findJavaScriptImport = require( './scriptRely' );
const findScssImport = require( './scssRely' );
const findCssImport = require( './cssRely' );
const Item = require( './Item' );
const getFileType = require('./getFileType');

class FindRelyMachine {

    constructor( opt ) {
        this.extensions = [];
        this.JAVASCRIPT_EXTENSIONS = [
            '.jsx',
            '.tsx',
            '.js',
            '.ts',
            '.mjs',
            '.web.js',
            '.json',
            '.web.jsx'
        ];
        this.STYLE_EXTENSIONS = [
            '.css',
            '.scss'
        ];
        this.resolveConfig = opt.resolveConfig;

        this.relyMap = {};

        if ( this.resolveConfig ) {
            this.extensions = this.resolveConfig.extensions.concat( ['.css', 'scss'] );
        } else {
            this.extensions = [...this.JAVASCRIPT_EXTENSIONS, ...this.STYLE_EXTENSIONS];
        }

    }

    

    // 补全路径信息
    supplementPathInfo ( filePath ) {
        const { dir, name, ext } = path.parse( filePath );
        if ( ext ) {
            const index = ext.indexOf( '?' );
            if ( index == -1 ) {
                return filePath;
            } else {
                return path.resolve( dir, name + ext.substr( 0, index ) );
            }
        }

        for ( let i = 0; i < this.extensions.length; i++ ) {
            const newPath = filePath + this.extensions[i];
            if ( fs.existsSync( newPath ) ) {
                return newPath;
            }
        }
        throw Error( `Could not find ${filePath}, support ext ${this.extensions.join( ',' )}` );
    }

    findModulesRely ( modulesPath ) {
        const pkgPath = path.resolve( modulesPath, 'package.json' );
        if ( !fs.existsSync( pkgPath ) ) throw Error( `Could not find ${pkgPath}` );
        const pkg = fs.readFileSync( path.resolve( modulesPath, 'package.json' ), 'utf8' );
        const { version, name } = JSON.parse( pkg );
    
        return new Item( {
            name,
            path: modulesPath,
            type: 'module',
            version: version
        } );
    
    }

    scheduling ( type, name, filePath ) {

        if ( fs.existsSync( filePath ) ) {

            // 需要先检查是否已经存在记录，防止循环引用问题和耗费多余资源
            if (this.relyMap[filePath]) {
                return {...this.relyMap[filePath], repeat: 1};
            }

            const fileInfo = path.parse( filePath );
            const content = fs.readFileSync( filePath, 'utf8' );
    
            const currItem = new Item( {
                name,
                path: filePath,
                type: type,
                contentHash: crypto.createHash( 'sha256' ).update( content ).update( filePath ).digest( 'hex' )
            } );
            this.saveRelyInfoToMap(currItem);
    
            const AST = acornLoose.parse( content, {
                sourceType: 'module',
                ecmaVersion: '2020'
            } );
    
            let relyList = [];
            switch ( type ) {
                case 'script': relyList = findJavaScriptImport( AST || null, [] );
                    break;
                case 'scss': relyList = findScssImport( AST || null, [] );
                    break;
                case 'css': relyList = findCssImport( AST || null, [] );
                    break;
            }
    
            // 判断是否为绝对路径或相对路径
            for ( let i = 0; i < relyList.length; i++ ) {
                const curr = relyList[i];
                const [first] = curr.split( '/' );
                let relyItem;
                // 相对路径
                if ( first[0] == '.' ) {
                    const relyFilePath = this.supplementPathInfo( path.join( fileInfo.dir, relyList[i] ) );
                    const { ext } = path.parse( relyFilePath );
                    relyItem = currItem.relys[relyFilePath] = this.scheduling( getFileType( ext ), relyFilePath, relyFilePath );
                    relyItem && this.saveRelyInfoToMap(relyItem);
                    continue;
                }
    
                // alias别名处理，如果是别名指向node_modules不处理
                if ( this.resolveConfig.alias && this.resolveConfig.alias[first] ) {
                    if ( this.resolveConfig.alias[first].indexOf( 'node_modules' ) == -1 ) {
                        const relyFilePath = this.supplementPathInfo( path.join( this.resolveConfig.alias[first], relyList[i].replace( first, '' ) ) );// 替换别名为空
                        const { ext } = path.parse( relyFilePath );
                        relyItem = currItem.relys[relyFilePath] = this.scheduling( getFileType( ext ), relyFilePath, relyFilePath );
                        relyItem && this.saveRelyInfoToMap(relyItem);
                        continue;
                    }
                }
    
                // node_modules中
                for ( let n = 0; n < this.resolveConfig.modules.length; n++ ) {
                    const currRelyFilePath = path.join( this.resolveConfig.modules[n], relyList[i].split( '/' )[0] );
                    if ( fs.existsSync( currRelyFilePath ) ) {
                        console.log(currRelyFilePath)
                        relyItem = currItem.relys[relyList[i].split('/')[0]] = this.findModulesRely( currRelyFilePath );
                        relyItem && this.saveRelyInfoToMap(relyItem);
                        break;
                    }
                }

                
            }
    
            return currItem;
        } else {
            throw Error( `Could not find ${filePath}` );
        }
    }

    saveRelyInfoToMap(relyItem) {
        this.relyMap[relyItem.name] = {
            name:relyItem.name,
            path: relyItem.path,
            type: relyItem.type,
            contentHash: relyItem.contentHash,
            version: relyItem.version
        }
    }

}


module.exports = function findRely (type, name, filePath, resolveConfig) {

    const findRelyMachine = new FindRelyMachine({resolveConfig});
    // 整体依赖树结构
    const totalRelyTree = findRelyMachine.scheduling(type, filePath, filePath);
    return findRelyMachine.relyMap;
}