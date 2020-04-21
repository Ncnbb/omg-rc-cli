
function outputJSFileName(chunkhash) {
    return process.env.OMG_ENV === 'production' && chunkhash ? '[name]-[chunkhash:8].js' : '[name].js';
}

function outputJSChunkFileName(chunkhash) {
    return process.env.OMG_ENV === 'production' && chunkhash ? '[name]-[chunkhash:8].chunk.js' : '[name].chunk.js';
}

function outputCSSFileName(chunkhash) {
    return process.env.OMG_ENV === 'production' && chunkhash ? '[name]-[chunkhash:8].css' : '[name].css';
}
function outputCSSChunkFileName(chunkhash) {
    return process.env.OMG_ENV === 'production' && chunkhash ? '[name]-[chunkhash:8].chunk.css' : '[name].chunk.css';
}

module.exports = function createOuputFileName(type, chunkhash) {
    switch(type) {
        case 'js' : return outputJSFileName(chunkhash);
        case 'jschunk' : return outputJSChunkFileName(chunkhash);
        case 'css' : return outputCSSFileName(chunkhash);
        case 'csschunk' : return outputCSSChunkFileName(chunkhash);
    }
}