const program = require( 'commander' );
const colors = require( 'colors' );
const pkg = require( './package.json' );
const logoOutput = require( './script/module/logo/logo' );
const createDir = require( './script/module/create/create' );
const emoji = require( 'node-emoji' );
const log = require('./script/extension/console/log'); 
const errlog = require('./script/extension/console/errorLog'); 

program
    .version( pkg.version, '-v, --version' )
    .usage( '[option] | omg [command]' )

program
    .command( 'create <dirPath> <name>' )
    .description( 'Create a standard directory structure' )
    .action( async ( dirPath, name ) => {
        const result = await createDir( dirPath, name );
        if (result) {
            log('task done!');
        } else {
            errlog('task error!');
        }
        process.exit( 1 );
    } );

program.parse( process.argv );

// 默认输出
// console.log( logoOutput() );
