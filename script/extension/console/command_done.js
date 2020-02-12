const log = require( './log' );
const notifier = require( 'node-notifier' );
const path = require('path');
module.exports = ( text ) => {
    log( { text: text, emoji: 'wink' } );
    notifier.notify( {
        title: 'OMG-CLI Message',
        message: text,
        icon: path.join(__dirname, '../../../logo/logo.png')
    } );
}