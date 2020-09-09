const path = require( 'path' );
const { isObject } = require( '../typeof' );
const findRely = require( './findRely' );
const getFileType = require( './getFileType' );
const {saveToCache, getToCache} = require('./cache');
const compareMap = require('./compareMap');

module.exports = function smartEntry ( webpackConfig ) {

    if ( !webpackConfig || !isObject( webpackConfig.entry ) ) return;
    const { entry, resolve } = webpackConfig;

    // const obj = {
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
        // 'smartEntry-example':
            // '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/smartEntry-example/js/index.jsx',
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
    // }

    const entryRelyMap = {};
    const noSmartEntryList = [];
    const inlineEntryList = {};
    for ( let key in entry ) {
        if ( entry[key].indexOf( '?__inline' ) != -1 ) {
            inlineEntryList[key] = entry[key];
            continue;
        };
        if ( entry[key].indexOf( '?__no_smart' ) != -1 ) {
            noSmartEntryList.push(key);
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
        buildEntryList = [...compareMap(cacheJSON, entryRelyMap), ...noSmartEntryList];
    } else {
        buildEntryList = [...Object.keys(entryRelyMap), ...noSmartEntryList];
    }

    let newEntry = {};
    for ( let i = 0; i < buildEntryList.length; i++ ) {
        if ( entry[buildEntryList[i]] ) {
            newEntry[buildEntryList[i]] = entry[buildEntryList[i]];
        }
    }

    if ( Object.keys(newEntry).length != 0 ) {
        newEntry = {...newEntry, ...inlineEntryList};
    } else {
        console.log('无需构建')
        process.exit( 0 );
    }

    saveToCache(webpackConfig, entryRelyMap);
    console.log(newEntry);
    return newEntry;
}