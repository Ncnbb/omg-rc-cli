const colors = require('colors');
const getLogo = require('./getLogoName');
const emoji = require( 'node-emoji' );
module.exports = (err) => {
    console.log(getLogo('warn'), emoji.get('unamused'), colors.yellow(err));
}