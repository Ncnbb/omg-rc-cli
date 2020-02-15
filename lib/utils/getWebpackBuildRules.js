const script = require('../modules/script');

module.exports = (config) => {
    return new Promise((resolve, reject) => {

        config = script(config);

        resolve(config);
    });
}
