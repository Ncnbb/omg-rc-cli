const { pathConfig } = require( './path' );
const path = require( 'path' );

module.exports = function createWebpackConfigSplitChunks() {

     return {
        chunks: 'initial', // 所有模块都将进行拆分，包括入口文件和动态import的
        minChunks: 1,
        automaticNameDelimiter: '~',// 共享模块连接符号
        automaticNameMaxLength: 30, // 最长的共享模块文件名长度
        maxAsyncRequests: 6, // 并发同步加载数量，相当于拆包数量
        maxInitialRequests: 6, // 动态import的加载数量，相当于动态import的拆包数量
        minSize: 5120, // 单包最小大小（最少5kb）
        name: true,
        cacheGroups: {
            styles: {
                name: (module, chunks, cacheGroupKey) => {
                    const arr = [];
                    module._chunks.forEach((chunk) => { arr.push(chunk.name) })
                    let splitChunkName = 'style~' + arr.join('~');
                    return splitChunkName;
                },
                test: /\.scss|css$/,
                chunks: 'initial',
                enforce: true,
                priority: 5,
            },
            react: {
                enforce: true,
                reuseExistingChunk: true,// 重用模块
                name: 'react-runtime',
                test: /(react|react-dom|prop-types)/,
                chunks: 'initial',
                priority: 10
            },
            vendors: {
                test: /\/node_modules\/.*.\.js/,
                name: (module, chunks, cacheGroupKey) => {
                    const arr = [];
                    module._chunks.forEach((chunk) => { arr.push(chunk.name) })
                    let splitChunkName = 'vender~' + arr.join('~');
                    return splitChunkName;
                },
                priority: 5
            }
        }
     }
}