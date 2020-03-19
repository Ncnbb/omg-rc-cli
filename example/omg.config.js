const path = require('path');

module.exports = {
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: `js/[name].js`,
    //     chunkFilename: `js/[name].chunk.js`,
    //     publicPath: `../`,
    //     // crossOriginLoading: 'anonymous'
    // },
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
    }
}