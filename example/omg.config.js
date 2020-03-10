const path = require('path');
module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: `js2/[name].js`,
        chunkFilename: `js2/[name].chunk.js`,
        publicPath: `../`,
        // crossOriginLoading: 'anonymous'
    }
}