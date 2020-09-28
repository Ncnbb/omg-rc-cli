const path = require( 'path' );
const fs = require( 'fs' );

const RUN_PATH = fs.realpathSync( process.cwd() );
const DIST_PATH = path.resolve( RUN_PATH, 'dist' );

const pathConfig = {
    runPath: RUN_PATH,

    appPath: RUN_PATH,
    appDist: DIST_PATH,

    ownNodeModules: path.join( __dirname, '../../node_modules' ),
    appNodeModules: path.resolve( RUN_PATH, 'node_modules' ),

    appCacheDir: path.resolve( RUN_PATH, './node_modules/.cache' ),

    templateDir: 'html',
    jsDir: 'js',
    cssDir: 'css',
    imageDir: 'images',
    fontDir: 'fonts',
    svgDir: 'svg',
};

module.exports = {
    pathConfig,
    setPathConfig: function ( key, value ) {
        pathConfig[key] = value;
    },
    initPathConfig: function ( buildPath, buildDir ) {
        pathConfig['appPath'] = path.resolve( RUN_PATH, buildPath );
        pathConfig['appDist'] = path.resolve( RUN_PATH, buildPath, './dist' );
    },
    changeCacheDirPath: function( cachePath, buildDir ) {
        pathConfig['appCacheDir'] = buildDir ? path.resolve( cachePath, buildDir ) : path.resolve( cachePath );
    }
};