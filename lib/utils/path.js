const path = require('path');
const fs = require('fs');

const RUN_PATH = fs.realpathSync(process.cwd());

module.exports = {
    appPath: RUN_PATH,
    appDist: path.resolve(RUN_PATH, 'dist'),

    ownNodeModules: 'node_modules',
    appNodeModules: path.resolve(RUN_PATH, 'node_modules'),


    templateDir: 'html',
    jsDir: 'js',
    cssDir: 'css',
    imageDir: 'images',
    fontDir: 'fonts',
};