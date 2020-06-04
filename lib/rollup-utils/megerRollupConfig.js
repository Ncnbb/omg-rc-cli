const rollupDefaultConfig = require('../config/rollup.config.base');
const mergeObj = require('../utils/mergeObject');

module.exports = function megerRollupConfig(config) {
    return mergeObj(rollupDefaultConfig, config);
}