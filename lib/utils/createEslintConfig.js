const path = require('path');
const fs = require('fs')

module.exports = (config) => {
    const eslintPath = path.join(config.context, '.eslintrc')
    const hasEslintFile = fs.existsSync(eslintPath);
    const eslintFormatter = hasEslintFile?
      require(eslintPath):  require('./eslintFomatter'); // 优先使用用户配置的eslint
      
    return {
        eslintPath: require.resolve('eslint'),
        useEslintrc: true,
        failOnWarning: false, // 报warning了就终止webpack编译
        failOnError: true, // 报error了就终止webpack编译
        formatter: eslintFormatter,
      }
};