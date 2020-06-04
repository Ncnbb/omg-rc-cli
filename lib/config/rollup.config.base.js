const progress = require( 'rollup-plugin-progress' );
const resolve = require( 'rollup-plugin-node-resolve' );
const common = require( 'rollup-plugin-commonjs' );
const { babel } = require( '@rollup/plugin-babel' );
const createBabelConfig = require('../utils/createBabelConfig');

module.exports = {
    inputOptions: {
        plugins: [
            resolve(),
            common(),
            // 构建进度
            progress( {
                clearLine: true
            } ),
            babel( {
                ...createBabelConfig({}, 'rollup'),
                babelHelpers: 'runtime',
                exclude: 'node_modules/**' // 只编译我们的源代码
            } )
        ],
    },
    outputOptions: {},
    browserList: null
}