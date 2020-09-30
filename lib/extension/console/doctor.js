const colors = require('colors');
const getLogo = require('./getLogoName');
const emoji = require('node-emoji');
const checkIsConsole = require('./checkIsConsole');
module.exports = (type, text, time) => {

    let emojiType;

    switch(type) {
        case 'check': emojiType = 'male-doctor';
        break;
        case 'sick': emojiType = 'pill';
        break;
        default: emojiType = 'white_check_mark';
        break;
    }

    if (!checkIsConsole()) return;
    console.log(getLogo('info'), emoji.get( emojiType ), '', colors.blue(text), time != null ? `${time/1000}s`.green : '');
}