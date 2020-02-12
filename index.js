const program = require( 'commander' );
const pkg = require( './package.json' );
const logoOutput = require( './script/module/logo/logo' );
const createDir = require( './script/module/create/create' );
const errlog = require( './script/extension/console/errorLog' );
const warnlog = require( './script/extension/console/warnlog' );
const commandDone = require('./script/extension/console/command_done');

program
    .version( pkg.version, '-v, --version' )
    .usage( '[option] | omg [command]' )
    .action(() => {
        // 没有命中任何命令
        warnlog('Your current command does not exist, please read the documentation carefully!');
        warnlog('You can enter the following command：omg --help');
    })

program
    .command( 'create <dirPath> <name>' )
    .description( 'Create a standard directory structure' )
    .action( async ( dirPath, name ) => {
        const result = await createDir( dirPath, name );
        if ( result ) {
            commandDone( 'omg create task done!' );
        } else {
            errlog( 'omg create task error!' );
        }
        process.exit( 1 );
    } );

program.parse( process.argv );
// 默认输出
if (!program.args || program.args.length == 0) console.log( logoOutput() )
