const babelConfig = require( '../utils/createBabelConfig' );
const pathConfig = require( '../utils/path' );
const fs = require( 'fs' );
const path = require( 'path' );
module.exports = ( config ) => {
  const { module } = config;
  const { rules } = module;

  // eslint配置
  // 判断运行目录下是否有eslint配置
  if ( fs.existsSync( path.resolve( pathConfig.appPath, '.eslintrc' ) ) ) {
    rules.push( {
      test: /\.js|jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: require.resolve( 'eslint-loader' ),
      options: {
        cache: false, // 不缓存结果
        enforce: 'pre', // 进过babel前进行检验
        failOnWarning: false, // 警告继续编译
        failOnError: true, // 错误停止编译
      }
    } );
  }

  rules.push( {
    test: /\.js|jsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: require.resolve( 'babel-loader' ),
      options: babelConfig()
    }
  } );

  // ts
  // 没有配置tsconfig,将不执行ts文件
  if ( fs.existsSync( path.resolve( pathConfig.appPath, 'tsconfig.json' ) ) ) {
    rules.push( {
      test: /\.ts|tsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        {
          loader: require.resolve( 'babel-loader' ),
          options: babelConfig()
        },
        {
          loader: require.resolve( 'ts-loader' ),
          options: {}
        },
      ]
    } );
  }
  console.log( babelConfig )
  return config;
}