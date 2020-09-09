
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
module.exports = function getFileType ( ext ) {
    return extensionMap[ext] || 'other';
}