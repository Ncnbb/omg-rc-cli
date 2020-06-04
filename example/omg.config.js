const path = require( 'path' );
const axios = require( 'axios' );

// console.log(process.env)

async function readHtml ( name ) {
    const res = await axios( {
        url: `http://127.0.0.1:9527/html/${name}.html`,
        method: 'get',
        responseType: 'text'
    } );
    return res.data;
}

module.exports = (env) => {
    return {
        omg: {
            // noCache: true
            // cacheToGlobal: true
        },
        entry: {
            eaentry: '@eagleeye-jssdk/loader/zuzuche.js?__inline',
        },
        output: {
            // path: path.join(__dirname, 'dist'),
            // filename: `js/[name].js`,
            // chunkFilename: `js/[name].chunk.js`,
            // publicPath: `../`,
            // crossOriginLoading: 'anonymous',
            // dirName: ''
        },
        browserslist: [ // 浏览器
            'Chrome >= 45',
            'last 2 Firefox versions',
            'ie >= 9',
            'Edge >= 12',
            'iOS >= 9',
            'Android >= 4',
            'last 2 ChromeAndroid versions'
        ],
        terser: {
            parse: {
                ecma: 2017,
            },
        },
        devServer: {
            before: ( app, server ) => {
                app.get( '/react-example', async function ( req, res ) {
                    let html = await readHtml( 'react-example' );
                    res.send( html );
                } );
            },
            prot: 9599,
            hot: true
        },
        resolve: {
            alias: {
                // '@': path.resolve( __dirname, './src/' ),
                // '^': path.resolve( __dirname, './src/otherService/' ),
                // '@@': path.resolve( __dirname, './src/' ),
                // '@rental': path.resolve( __dirname, './src/mainRental' ),
                // '@rentalAfter': path.resolve( __dirname, './src/rentalAfter' ),
            }
        },
        // analyzer: true,
        // analyzerOpt: {
        //     analyzerPort: 9901
        // },
        // jarvis: true,
        // jarvisOpt: {
        //     port: 9902
        // },
        // loaderOpt: {
        //     scss: (rules) => {
        //         console.log(rules);
        //     }
        // },
        // smp: true
    }
}