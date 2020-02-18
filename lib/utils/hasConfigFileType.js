module.exports = {
    babel: function(){
        return {
            fileType: ['.babelrc', '.babelrc.?(js|mjs|cjs)', 'babel.config.?(js|mjs|cjs)'],//优先搜索顺序
        }
    },
    eslint: function(){
        return {
            fileType: ['.eslintrc', '.eslintrc.?(js|mjs|cjs|json)'],
        }
    },
    typescript: function(){
        return {
            fileType: ['tsconfig.?(js|json)']
        }
    }
};