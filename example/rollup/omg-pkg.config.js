module.exports = {
    inputOptions: {
        input: './src/index.js'
    },
    outputOptions: {
        file: './dist/bundle.js',
    },
    browserList: [
        'Chrome >= 45',
        'last 2 Firefox versions',
        'ie >= 9',
        'Edge >= 12',
        'iOS >= 9',
        'Android >= 4',
        'last 2 ChromeAndroid versions'
    ]
}