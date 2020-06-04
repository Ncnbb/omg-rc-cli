const fs = require('fs');
const path = require('path');
const { isString } = require('../utils/typeof');
const FILE_NAME = 'omg-pkg.config.js';
const megerRollupConfig = require('./megerRollupConfig');

module.exports = function getRollupConfigFile(runPath) {

    return new Promise((res,rej) => {
        const FILE_PATH = path.resolve(runPath, FILE_NAME);
        if ( fs.existsSync(FILE_PATH) ) {
            const config = require(FILE_PATH);
            res(megerRollupConfig(config));
        } else {
            throw new Error( `Could not find omg-pkg.config.js!` )
        }
    })
   
}