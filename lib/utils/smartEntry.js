const path = require( 'path' );
const fs = require( 'fs' );
const acornLoose = require( "acorn-loose" );
const sast = require( 'sast' );
const crypto = require( 'crypto' );
const { isObject, isArray } = require( './typeof' );

let extensions = [];
const JAVASCRIPT_EXTENSIONS = [
    '.jsx',
    '.tsx',
    '.js',
    '.ts',
    '.mjs',
    '.web.js',
    '.json',
    '.web.jsx'
];
const STYLE_EXTENSIONS = [
    '.css',
    '.scss'
];
const extensionMap = {
    '.css': 'css',
    '.scss': 'scss',
    '.js': 'script',
    '.ts': 'script',
    '.jsx': 'script',
    '.tsx': 'script',
    '.mjs': 'script',
    '.web.js': 'script',
    '.web.jsx': 'script',
}


class Item {
    constructor( opt ) {
        this.name = opt.name;
        this.path = opt.path;
        this.type = opt.type;
        this.contentHash = opt.contentHash || null;
        this.version = opt.version || null
        this.relys = {};

    }
}

function getFileType(ext) {
    return extensionMap[ext] || 'other';
}


// 补全路径信息
function supplementPathInfo ( filePath ) {
    const { dir, name, ext } = path.parse( filePath );

    if ( ext ) {
        const index = ext.indexOf( '?' );
        if ( index == -1 ) {
            return filePath;
        } else {
            return path.resolve( dir, name + ext.substr( 0, index ) );
        }
    }

    for ( let i = 0; i < extensions.length; i++ ) {
        const newPath = filePath + extensions[i];
        if ( fs.existsSync( newPath ) ) {
            return newPath;
        }
    }
    throw Error( `Could not find ${filePath}, support ext ${extensions.join( ',' )}` );
}

function findJavaScriptImport ( ASTList, result ) {
    if ( ASTList && isObject( ASTList ) ) {
        switch ( ASTList.type ) {
            case 'MemberExpression':
                findJavaScriptImport( ASTList.object, result );
                break;
            case 'CallExpression':
                findJavaScriptImport( ASTList.callee, result );
                break;
            case 'ImportExpression':
                const { source } = ASTList;
                result.push( source.value );
                break;
            case 'ClassDeclaration':
            case 'ClassBody':
            case 'FunctionExpression':
            case 'BlockStatement':
            case 'Program':
                findJavaScriptImport( ASTList.body, result );
                break;
        }
    }

    else if ( ASTList && isArray( ASTList ) ) {
        for ( let i = 0; i < ASTList.length; i++ ) {

            const curr = ASTList[i];
            switch ( curr.type ) {
                case 'ImportDeclaration':
                    const { source } = curr;
                    result.push( source.value );
                    break;
                case 'ExpressionStatement':
                    findJavaScriptImport( curr.expression, result );
                    break;
                case 'MethodDefinition':
                    findJavaScriptImport( curr.value, result );
                    break;

                default: findJavaScriptImport( curr, result );
            }
        }
    }
    return result

}

function findRely ( type, name, filePath, resolveConfig ) {


    if ( fs.existsSync( filePath ) ) {
        const fileInfo = path.parse( filePath );
        const content = fs.readFileSync( filePath, 'utf8' );

        // const tree = sast.parse( content, { syntax: 'scss' } )
        // fs.writeFileSync( path.resolve( __dirname, './test.json' ), JSON.stringify( tree, null, '\t' ) );

        const currItem = new Item( {
            name,
            path: filePath,
            type: type,
            contentHash: crypto.createHash( 'sha256' ).update( content ).digest( 'hex' )
        } );

        const AST = acornLoose.parse( content, {
            sourceType: 'module',
        } );

        const relyList = findJavaScriptImport( AST || null, [] );
        // 判断是否为绝对路径或相对路径
        for ( let i = 0; i < relyList.length; i++ ) {
            const curr = relyList[i];
            const { ext } = path.parse( relyList[i] );
            const [first] = curr.split( '/' );
            // 相对路径
            if ( first[0] == '.' ) {
                const relyFilePath = supplementPathInfo( path.join( fileInfo.dir, relyList[i] ) );
                const { ext } = path.parse( relyFilePath );
                relyList[i] = relyFilePath;
                currItem.relys[relyFilePath] = findRely( getFileType(ext), relyFilePath, relyFilePath, resolveConfig );
                continue;
            }

            // alias别名处理，如果是别名指向node_modules不处理
            if ( resolveConfig.alias && resolveConfig.alias[first] ) {
                if ( resolveConfig.alias[first].indexOf( 'node_modules' ) == -1 ) {
                    const relyFilePath = supplementPathInfo( path.join( resolveConfig.alias[first], relyList[i].replace( first, '' ) ) );// 替换别名为空
                    const { ext } = path.parse( relyFilePath );
                    relyList[i] = relyFilePath;
                    currItem.relys[relyFilePath] = findRely( getFileType(ext), relyFilePath, relyFilePath,  resolveConfig );
                    continue;
                }
            }

            // node_modules中
            for ( let n = 0; n < resolveConfig.modules.length; n++ ) {
                const currRelyFilePath = path.join( resolveConfig.modules[n], relyList[i] );
                if ( fs.existsSync( currRelyFilePath ) ) {
                    relyList[i] = currRelyFilePath;
                    break;
                }

            }
        }
        console.log( relyList );

        // fs.writeFileSync( path.resolve( __dirname, './test.json' ), JSON.stringify( AST, null, '\t' ) );
        return currItem;


    } else {
        throw Error( `Could not find ${filePath}` );
    }

}

module.exports = function smartEntry ( webpackConfig ) {
    if ( !webpackConfig || !isObject( webpackConfig.entry ) ) return;
    const { entry, resolve } = webpackConfig;
    // console.log( entry );
    console.log( webpackConfig.resolve );

    if ( webpackConfig.extensions ) {
        extensions = webpackConfig.extensions.concat( ['.css', 'scss'] );
    } else {
        extensions = [...JAVASCRIPT_EXTENSIONS, ...STYLE_EXTENSIONS];
    }

    const obj = {
        // 'css-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/css-example/js/css-example.js',
        // 'es-es5-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/es-es5-example/js/es-es5-example.js',
        // 'font-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/font-example/js/font-example.jsx',
        // 'handlebars-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/handlebars-example/js/handlebars-example.js',
        // 'hot-react-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/hot-react-example/js/index.jsx',
        // 'html-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/html-example/js/html-example.js',
        // 'images-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/images-example/js/images-example.js',
        // 'jsinline-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/jsinline-example/js/index.jsx',
        // 'lazy-load-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/lazy-load-example/js/lazy-load-example.js',
        // 'lazy-load-example2':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/lazy-load-example2/js/lazy-load-example2.js',
        'smartEntry-example':
            '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/smartEntry-example/js/index.jsx',
        // 'react-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/react-example/js/index.jsx',
        // 'scss-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/scss-example/js/scss-example.js',
        // 'svg-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/svg-example/js/svg-example.jsx',
        // 'tree-shaking':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/tree-shaking/js/tree-shaking.js',
        // 'ts-js-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/ts-js-example/js/ts-js-example.ts',
        // 'tsx-js-example':
        //     '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/tsx-js-example/js/tsx-js-example.tsx',
        // eaentry: '@eagleeye-jssdk/loader/zuzuche.js?__inline'
    }

    const entryRelyMap = {};
    for ( let key in obj ) {
        if ( entry[key].indexOf( '?__inline' ) == -1 ) {
            entryRelyMap[key] = {};
            const { ext } = path.parse( entry[key] );
            entryRelyMap[key] = findRely( getFileType(ext), key, entry[key], resolve );
        }
    }
    fs.writeFileSync( path.resolve( __dirname, './result.json' ), JSON.stringify( entryRelyMap, null, '\t' ) );

    console.log( entryRelyMap );
    process.exit( -1 );
}