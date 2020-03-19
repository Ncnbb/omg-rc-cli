'use strict';
const os = require( 'os' );
const hasConfigFile = require( '../utils/hasConfigFile' );
const babelConfig = require( '../utils/createBabelConfig' );
const eslintConfig = require( '../utils/createEslintConfig' );
const createTerserPlugin = require( '../utils/createTerserPlugin' );

module.exports = ( config ) => {
  const { module, optimization } = config;
  const { rules } = module;

  const hasTsConfig = hasConfigFile( 'typescript', false ).hasConfig;
  const hasEsConfig = hasConfigFile( 'eslint', false ).hasConfig;


  // babel
  rules.push( {
      test: /\.(js|jsx|mjs)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: require.resolve('babel-loader'),
        options: babelConfig(config),
      }
  } );


  // typescript
  hasTsConfig && rules.push( {
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: require.resolve( 'ts-loader' )
    }
  } );


  // eslint
  hasEsConfig && rules.unshift( {
    test: /\.js|jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: require.resolve( 'eslint-loader' ),
    options: eslintConfig( config )
  } );

  // js代码压缩
  optimization.minimize = config.mode == 'production';
  if ( optimization.minimize ) {
    config.optimization.minimizer = [createTerserPlugin( config )];
  }

  return config;
}