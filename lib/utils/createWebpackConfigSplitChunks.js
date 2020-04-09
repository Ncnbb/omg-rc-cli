const { pathConfig } = require( './path' );
const path = require( 'path' );

module.exports = function createWebpackConfigSplitChunks () {
    return {
        chunks: 'initial',
        minChunks: 2,
        automaticNameDelimiter: '~',// 共享模块连接符号
        automaticNameMaxLength: 30, // 最长的共享模块文件名长度
        maxAsyncRequests: 8, // 并发同步加载数量，相当于拆包数量
        maxInitialRequests: 6, // 动态import的加载数量，相当于动态import的拆包数量
        minSize: 30000, // 单包最小大小（最少5kb）
        name: true,
        cacheGroups: {
            babel: {
                test: /\/node_modules\/@babel/,
                priority: -10,
                chunks: 'initial',
                name: 'core-js',
                minSize: 30000,
                reuseExistingChunk: true,// 重用模块
            },
            react: {
                enforce: true,
                reuseExistingChunk: true,// 重用模块
                name: 'react-runtime',
                test: /\/node_modules\/(react|react-dom)/,
                chunks: 'initial',
                priority: -10
            },
            vendors: {
                test: /\/node_modules\/.*.\.js/,
                reuseExistingChunk: true,
                priority: -20
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    }
}