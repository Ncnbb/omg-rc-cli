const path = require('path');
const fs = require('fs');

const RUN_PATH = fs.realpathSync(process.cwd());
const DIST_PATH = path.resolve(RUN_PATH, 'dist');

const pathConfig = {
    appPath: RUN_PATH,
    appDist: DIST_PATH,

    ownNodeModules: 'node_modules',
    appNodeModules: path.resolve(RUN_PATH, 'node_modules'), 

    utilsPath: path.resolve(RUN_PATH, '../lib/utils'),

    appCacheDir: path.resolve(RUN_PATH, './.cache'),
    
    templateDir: 'html',
    jsDir: 'js',
    cssDir: 'css',
    imageDir: 'images',
    fontDir: 'fonts',
};

module.exports = {
    pathConfig,
    setPathConfig: function(key, value) {
        pathConfig[key] = value;
    }
};