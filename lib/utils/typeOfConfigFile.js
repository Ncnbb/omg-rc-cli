module.exports = {
    babel: function(){
        return {
            fileType: ['.babelrc', '.babelrc.?(js|mjs|cjs)', 'babel.config.?(js|mjs|cjs)'], //优先顺序
            hasConfig: 'hasBabelConfig',
        }
    },
    eslint: function(){
        return {
            fileType: ['.eslintrc', '.eslintrc.?(js|mjs|cjs|json)'],
            // .eslintignore
            hasConfig: 'hasEslintConfig',
        }
    },
    typescript: function(){
        return {
            fileType: ['tsconfig.?(js|json)']
        }
    }
};