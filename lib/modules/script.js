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
    use: [
      {
        loader: require.resolve( 'thread-loader' ),
        options: {
          // worker的数量，默认是cpu核心数
          workers: os.cpus().length,

          // 一个worker并行的job数量，默认为20
          workerParallelJobs: 50,

          // 添加额外的node js 参数
          workerNodeArgs: ['--max-old-space-size=1024'],


          // 允许重新生成一个dead work pool
          // 这个过程会降低整体编译速度
          // 开发环境应该设置为false
          poolRespawn: false,


          //空闲多少秒后，干掉work 进程
          // 默认是500ms
          // 当处于监听模式下，可以设置为无限大，让worker一直存在
          poolTimeout: 3000,

          // pool 分配给workder的job数量
          // 默认是200
          // 设置的越低效率会更低，但是job分布会更均匀
          poolParallelJobs: 50,

          name: "babel-pool"
        }
      },
      {
        loader: require.resolve( 'babel-loader' ),
        options: babelConfig( config ),
      }
    ]
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