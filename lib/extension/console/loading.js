const io = require( 'ncnbb-io-spin' );
const checkIsConsole = require('./checkIsConsole');
class Loading {
    constructor(name) {
        if (!checkIsConsole()) return;
        this.name = name;
        this.spin = io( `${name}`, 'Box1', 'green' ).start();
    }

    update(text) {
        if (!checkIsConsole()) return;
        this.spin.update( `${this.name}: ${text}`.green )
    }

    stop() {
        if (!checkIsConsole()) return;
        this.spin.stop();
    }
}

module.exports = Loading;