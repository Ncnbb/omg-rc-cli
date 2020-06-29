const colors = require('colors');
const getLogo = require('./getLogoName');
const emoji = require( 'node-emoji' );
const checkIsConsole = require('./checkIsConsole');
module.exports = (err) => {
    checkIsConsole() && console.log(getLogo('warn'), emoji.get('unamused'), '', colors.yellow(err));
}