const path = require('path');
module.exports = (targetPath) => {
    const basename = path.basename(targetPath);
    const extname = path.extname(targetPath);
    return basename.replace(`.view${extname}`, '');
}