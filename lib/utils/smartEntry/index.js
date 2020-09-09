const path = require( 'path' );
const fs = require( 'fs' );
const { isObject } = require( '../typeof' );
const findRely = require( './findRely' );
const getFileType = require( './getFileType' );

module.exports = function smartEntry ( webpackConfig ) {
    if ( !webpackConfig || !isObject( webpackConfig.entry ) ) return;
    const { entry, resolve } = webpackConfig;
    // console.log( entry );
    console.log( webpackConfig.resolve );

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
        if ( entry[key].indexOf( '?__inline' ) != -1 || entry[key].indexOf( '?__no_smart' ) != -1 ) continue;
        entryRelyMap[key] = {};
        const { ext } = path.parse( entry[key] );
        entryRelyMap[key] = findRely( getFileType( ext ), key, entry[key], resolve );
    }

    // 输出结果
    fs.writeFileSync( path.resolve( __dirname, './result.json' ), JSON.stringify( entryRelyMap, null, '\t' ) );

    process.exit( -1 );
}