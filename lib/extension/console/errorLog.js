const colors = require('colors');
const getLogo = require('./getLogoName');
const emoji = require( 'node-emoji' );
const checkIsConsole = require('./checkIsConsole');
module.exports = (err) => {
    if (!checkIsConsole()) return;
    if ( err instanceof Error ) {
        console.log(getLogo('err'), '', colors.red(err.stack));
    } else {
        console.log(getLogo('err'), emoji.get('tired_face'), '', colors.red(err));
    }
}