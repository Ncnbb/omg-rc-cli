const colors = require('colors');
const getLogo = require('./getLogoName');
const emoji = require('node-emoji');
module.exports = (text, time) => {
    if (typeof text == 'string') {
        console.log(getLogo('ok'), emoji.get( 'beer' ), colors.blue(text), time != null ? `${time/1000}s`.green : '');
    } else if (typeof text == 'object') {
        const { text: _text, time: _time, emoji: _emoji } = text;
        console.log(getLogo('ok'), emoji.get( _emoji || 'beer' ), colors.blue(_text), _time != null ? `${_time/1000}s`.green : '');
    }
}