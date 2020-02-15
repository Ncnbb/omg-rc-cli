
module.exports = ( config ) => {
    const { module } = config;
    const { rules } = module;

    // babel
    rules.push( {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      } );


    return config;
}