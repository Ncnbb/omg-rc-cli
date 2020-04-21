const program = require( 'commander' );
const pkg = require( './package.json' );
const logoOutput = require( './lib/extension/logo/logo' );
const createDir = require( './lib/script/create' );
const initProject = require( './lib/script/initProject' );
const warnlog = require( './lib/extension/console/warnlog' );
const commandDone = require( './lib/extension/console/command_done' );
const build = require( './lib/script/build' );
const watch = require( './lib/script/watch' );
const server = require( './lib/script/server' );
const publish = require( './lib/script/publish' );

program
    .version( pkg.version, '-v, --version' )
    .usage( '[option] | omg [command]' )
    .action( () => {
        // 没有命中任何命令
        warnlog( 'Your current command does not exist, please read the documentation carefully!' );
        warnlog( 'You can enter the following command：omg --help' );
    } )

program
    .command( 'init <projectName>' )
    .description( 'init your project' )
    .action( async ( projectName ) => {
        const result = await initProject( projectName );
        if ( result ) {
            commandDone( 'ok', 'omg init task done!' );
            process.exit( 0 );
        } else {
            commandDone( 'err', 'omg init task error!' );
            process.exit( 1 );
        }
    } );

program
    .command( 'create <dirPath> <name>' )
    .description( 'Create a standard directory structure' )
    .action( async ( dirPath, name ) => {
        const result = await createDir( dirPath, name );
        if ( result ) {
            commandDone( 'ok', 'omg create task done!' );
            process.exit( 0 );
        } else {
            commandDone( 'err', 'omg create task error!' );
            process.exit( 1 );
        }
    } );

program
    .command( 'build [targetPath] [targetDir]' )
    .option('-r, --remove', 'remove output dir', false)
    .option('-t, --target <path>', 'Specifies the specified file in the targetPath directory to build', null)
    .option('--no-prompt', 'Build prompt is disabled')
    .option('--no-progress', 'Build progress output is disabled')
    .description( 'build file, [targetPath] specify build directory, [targetDir] specified file in dirTarget.' )
    .action( async ( path, dir, options ) => {
        const result = await build( path, dir, env, options );
        if ( result ) {
            commandDone( 'ok', 'omg build task done!' );
            process.exit( 0 );
        } else {
            commandDone( 'err', 'omg build task error!' );
            process.exit( 1 );
        }
    } );

program
    .command( 'watch [targetPath] [targetDir]' )
    .option('-r, --remove', 'remove output dir', false)
    .option('-t, --target <path>', 'Specifies the specified file in the targetPath directory to build', null)
    .option('--no-prompt', 'Build prompt is disabled')
    .option('--no-progress', 'Build progress output is disabled')
    .description( 'build file, [targetPath] specify build directory, [targetDir] specified file in dirTarget.' )
    .action( async ( path, dir, options ) => {
        const result = await watch( path, dir, env, options );
        if ( result ) {
            commandDone( 'ok', 'omg watch task end!' );
            process.exit( 0 );
        } else {
            commandDone( 'err', 'omg watch task error!' );
            process.exit( 1 );
        }
    } );

program
    .command( 'server [targetPath] [targetDir]' )
    .option('-t, --target <path>', 'Specifies the specified file in the targetPath directory to build', null)
    .option('--no-prompt', 'Build prompt is disabled')
    .option('--no-progress', 'Build progress output is disabled')
    .description( 'dev server, [targetPath] specify build directory, [targetDir] specified file in dirTarget.' )
    .action( async ( path, dir, options ) => {
        const result = await server( path, dir, env, options );
        if ( result ) {
            commandDone( 'ok', 'omg server task end!' );
            process.exit( 0 );
        } else {
            commandDone( 'err', 'omg server task error!' );
            process.exit( 1 );
        }
    } );

program
    .command( 'publish [targetPath] [targetDir]' )
    .option('-r, --remove', 'remove output dir', false)
    .option('-t, --target <path>', 'Specifies the specified file in the targetPath directory to build', null)
    .option('--no-chunkhash', 'run publish output file not add chunkhash to file name')
    .option('--no-prompt', 'Build prompt is disabled')
    .option('--no-progress', 'Build progress output is disabled')
    .description( 'publish file, [targetPath] specify publish directory, [targetDir] specified file in dirTarget.' )
    .action( async ( path, dir, options ) => {
        const result = await publish( path, dir, env, options );
        if ( result ) {
            commandDone( 'ok', 'omg publish task done!' );
            process.exit( 0 );
        } else {
            commandDone( 'err', 'omg publish task error!' );
            process.exit( 1 );
        }
    } );
const env = {};

const argv = process.argv.reduce( ( result, item ) => {
    if ( /--env\..*/.test( item ) ) {
        const matchKey = item.match( /--env\.(.*)/ );
        if ( matchKey && matchKey[1] ) {
            const [key, value] = matchKey[1].split( '=' );
            env[key] = value;
        }
    } else {
        result.push( item );
    }
    return result;
}, [] );
program.parse( argv );
// 默认输出
// if ( !program.args || program.args.length == 0 ) console.log( logoOutput() )
if ( !argv || argv.length == 2 ) console.log( logoOutput() )
