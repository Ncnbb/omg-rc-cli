'use strict';

const fs = require('fs');
const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

const typeOf = require('../utils/typeof');

const babelConfig = require( '../utils/createBabelConfig' );
const tsConfig = require( '../utils/createTypescriptConfig' );
const eslintConfig = require( '../utils/createEslintConfig' );

// const DEFAULT_TERSER_OPTIONS = {
//   // 压缩
//   // https://github.com/terser/terser#minify-options
// 	compress: {
// 		ecma: 5,
// 		comparisons: false,
// 		inline: 2,
// 		warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
// 		drop_console: false, // 删除所有的 `console` 语句, 还可以兼容ie浏览器
// 		drop_debugger: true, // 移除 `debugger;` 声明
// 		collapse_vars: true, // 内嵌定义了但是只用到一次的变量
// 		reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
// 	},
// };

module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;

    // const shouldUseSourceMap =
    // !typeOf.isUndefined(config.devtool) && config.devtool !== false;
    
    // babel
    rules.push( {
        test: /\.(js|jsx|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: babelConfig(),
        }
    } );

    // typescript
    rules.push( {
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: tsConfig(),
      }
    } );


    // eslint
    // rules.unshift({
    //   test:  /\.(js|mjs|jsx)$/,
    //   enforce: 'pre',
    //   include: config.context, // 指定检查的目录,
    //   exclude: /(node_modules|bower_components)/,
    //   use: [
    //     { 
    //       loader: 'eslint-loader',
    //       options: eslintConfig(),
    //     },
    //   ],
    // });
    // 这么改
    rules.unshift({
      test: /\.js|jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: require.resolve( 'eslint-loader' ),
      options: {
        cache: false, // 不缓存结果
        enforce: 'pre', // 进过babel前进行检验
        failOnWarning: false, // 警告继续编译
        failOnError: true, // 错误停止编译
      }
    });

    

    // 是否压缩
    // if (config.optimization.minimize === undefined) {
    //   config.optimization.minimize = config.mode === 'production';
    // }

    // // 压缩配置
    // if(config.optimization.minimize){
    //   const terserOptions = Object.assign({}, DEFAULT_TERSER_OPTIONS );
    //   config.optimization.minimizer.push(
    //     new TerserPlugin({
    //       //todo another options
    //       sourceMap: shouldUseSourceMap,
    //       terserOptions: terserOptions,
    //     })
    //   )
    // }

    return config;
}