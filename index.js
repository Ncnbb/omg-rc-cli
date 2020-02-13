const program = require( 'commander' );
const pkg = require( './package.json' );
const logoOutput = require( './lib/modules/logo/logo' );
const createDir = require( './lib/script/create' );
const warnlog = require( './lib/extension/console/warnlog' );
const commandDone = require( './lib/extension/console/command_done' );
const build = require('./lib/script/build');

program
    .version( pkg.version, '-v, --version' )
    .usage( '[option] | omg [command]' )
    .action( () => {
        // 没有命中任何命令
        warnlog( 'Your current command does not exist, please read the documentation carefully!' );
        warnlog( 'You can enter the following command：omg --help' );
    } )

program
    .command( 'create <dirPath> <name>' )
    .description( 'Create a standard directory structure' )
    .action( async ( dirPath, name ) => {
        const result = await createDir( dirPath, name );
        if ( result ) {
            commandDone( 'ok', 'omg create task done!' );
        } else {
            commandDone( 'err', 'omg create task error!' );
        }
        process.exit( 1 );
    } );

program
    .command( 'build [targetPath] [targetDir]' )
    .description( 'build file, [targetPath] specify build directory, [targetDir] specified file in dirTarget.' )
    .action( async ( path, dir ) => {
        const result = await build( path, dir );
        if ( result ) {
            commandDone( 'ok', 'omg build task done!' );
        } else {
            commandDone( 'err', 'omg build task error!' );
        }
        process.exit( 1 );
    } );

program.parse( process.argv );
// 默认输出
// if ( !program.args || program.args.length == 0 ) console.log( logoOutput() )
if ( !process.argv ||  process.argv.length == 2 ) console.log( logoOutput() )
