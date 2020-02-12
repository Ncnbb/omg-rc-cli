const colors = require('colors');
const getLogo = require('./getLogoName');
const emoji = require('node-emoji');
module.exports = (text, time) => {
    console.log(getLogo('ok'), emoji.get( 'beer' ), colors.blue(text), time != null ? `${time/1000}s`.green : '');
}