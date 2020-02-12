const colors = require('colors');
const getLogo = require('./getLogoName');
const emoji = require( 'node-emoji' );
module.exports = (err) => {
    if ( err instanceof Error ) {
        console.log(getLogo('err'), colors.red(err.stack));
    } else {
        console.log(getLogo('err'), emoji.get('x'), colors.red(err));
    }
}