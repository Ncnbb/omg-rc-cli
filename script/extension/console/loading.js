const io = require( 'ncnbb-io-spin' );

class Loading {
    constructor(name) {
        this.name = name;
        this.spin = io( name, 'Box1', 'green' ).start();
    }

    update(text) {
        this.spin.update( `${this.name}: ${text}`.green )
    }

    stop() {
        this.spin.stop();
    }
}

module.exports = Loading;