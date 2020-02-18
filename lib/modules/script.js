'use strict';

const hasConfigFile = require('../utils/hasConfigFile');

const babelConfig = require( '../utils/createBabelConfig' );
const eslintConfig = require( '../utils/createEslintConfig' );

module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;

    const hasTsConfig = hasConfigFile('typescript', false).hasConfig;
    const hasEsConfig = hasConfigFile('eslint', false).hasConfig;


    // babel
    rules.push( {
        test: /\.(js|jsx|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: require.resolve('babel-loader'),
          options: babelConfig(),
        }
    } );


    // typescript
    hasTsConfig && rules.push( {
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: require.resolve('ts-loader')
      }
    } );


    // eslint
    hasEsConfig && rules.unshift({
      test: /\.js|jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: require.resolve( 'eslint-loader' ),
      options: eslintConfig()
    });
    return config;
}