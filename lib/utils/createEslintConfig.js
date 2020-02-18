module.exports = () => {
    return {
        cache: false, // 不缓存结果
        enforce: 'pre', // 进过babel前进行检验
        failOnWarning: false, // 警告继续编译
        failOnError: true, // 错误停止编译
      }
};