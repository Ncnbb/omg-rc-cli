
function outputJSFileName() {
    return process.env.OMG_ENV === 'production' ? '[name]-[chunkhash:8].js' : '[name].js';
}

function outputJSChunkFileName() {
    return process.env.OMG_ENV === 'production' ? '[name]-[chunkhash:8].chunk.js' : '[name].chunk.js';
}

function outputCSSFileName() {
    return process.env.OMG_ENV === 'production' ? '[name]-[chunkhash:8].css' : '[name].css';
}
function outputCSSChunkFileName() {
    return process.env.OMG_ENV === 'production' ? '[name]-[chunkhash:8].chunk.css' : '[name].chunk.css';
}

module.exports = function createOuputFileName(type) {
    switch(type) {
        case 'js' : return outputJSFileName();
        case 'jschunk' : return outputJSChunkFileName();
        case 'css' : return outputCSSFileName();
        case 'csschunk' : return outputCSSChunkFileName();
    }
}