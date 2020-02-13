const log = require( './log' );
const errorlog = require( './errorLog' );
const notifier = require( 'node-notifier' );
const emoji = require( 'node-emoji' );
const path = require( 'path' );
module.exports = ( type, text ) => {
    type == 'ok' ? log( { text: text, emoji: 'wink' } ) : errorlog( text );
    notifier.notify( {
        title: 'OMG-CLI Message',
        message: text,
        icon: path.join( __dirname, '../../../logo/logo.png' )
    } );
}