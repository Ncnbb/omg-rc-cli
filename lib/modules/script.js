const babelConfig = require( '../utils/createBabelConfig' );
module.exports = ( config ) => {
  const { module } = config;
  const { rules } = module;

  // babel
  rules.push( {
    test: /\.js|jsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: babelConfig()
    }
  } );

  console.log( babelConfig )
  return config;
}