const hasBabelConfigFile = require('./hasConfigFile');
const defaultConfig = require('./setWebpackRulesDefaultConfig');

const hasBabelConfig = hasBabelConfigFile('babel', false);

module.exports = () => {
    return  defaultConfig(hasBabelConfig);
}
