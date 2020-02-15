const colors = require('colors');
const LOGO = "OMG";

module.exports = (type) => {
    switch(type) {
        case 'ok': return colors.bgGreen(` ${LOGO} `.brightWhite);
        case 'err': return colors.bgRed(` ${LOGO} `.brightWhite);
        case 'warn': return colors.bgYellow(` ${LOGO} `.brightWhite);
        case 'info': return colors.bgBlue(` ${LOGO} `.brightWhite);
        default: return '';
    }
}