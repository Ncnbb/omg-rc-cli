const { setPathConfig } = require( '../utils/path' );
const mergeObject = require( '../utils/mergeObject' );

module.exports = ( config, customOMGConfig ) => {

   // 当发现项目中存在配置文件，那么将进行合拼
   let newConfig = mergeObject( config, customOMGConfig )
   setPathConfig( 'appDist', newConfig.output.path );

   return newConfig;
}