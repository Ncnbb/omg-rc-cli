const path = require('path');

const hasEslintConfigFile = require('./hasConfigFile');

const onlyUserConfig = true;
const hasEslintConfig = hasEslintConfigFile('eslint', onlyUserConfig);

module.exports = () => {
    if(!hasEslintConfig.hasConfig) return false;
    
    const eslintPath = path.join(hasEslintConfig.path) 
    const eslintFormatter = require(eslintPath)
      
    return {
        eslintPath: require.resolve('eslint'),
        useEslintrc: true,
        failOnWarning: false, // 报warning了就终止webpack编译
        failOnError: true, // 报error了就终止webpack编译
        formatter: eslintFormatter,
      }
};