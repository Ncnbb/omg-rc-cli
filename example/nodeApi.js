const omg = require('../index_node');

async function build() {
    const result = await omg.server({
        path: null,
        dir: null, 
        env: {},
        options: {
            console: false
        },
        config: {
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
                port: 9599,
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
            }
        }
    });

    console.log(result);
}

build();

