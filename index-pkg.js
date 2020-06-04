const program = require( 'commander' );
const pkg = require( './package.json' );
const logoOutput = require( './lib/extension/logo/logo' );
const warnlog = require( './lib/extension/console/warnlog' );
const commandDone = require( './lib/extension/console/command_done' );
const buildPKG = require( './lib/script/build-pkg' );

program
    .version( pkg.version, '-v, --version' )
    .usage( '[command]' )
    .action( () => {
        // 没有命中任何命令
        warnlog( 'Your current command does not exist, please read the documentation carefully!' );
        warnlog( 'You can enter the following command：omg --help' );
    } )

program
    .command( 'build' )
    // .option('-r, --remove', 'remove output dir', false)
    // .option('-t, --target <path>', 'Specifies the specified file in the targetPath directory to build', null)
    // .option('--no-prompt', 'Build prompt is disabled')
    // .option('--no-progress', 'Build progress output is disabled')
    .description( 'build file' )
    .action( async ( path, dir, options ) => {
        const result = await buildPKG( path, dir, env, options );
        if ( result ) {
            commandDone( 'ok', 'omg-pkg build task done!' );
            process.exit( 0 );
        } else {
            commandDone( 'err', 'omg-pkg build task error!' );
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
