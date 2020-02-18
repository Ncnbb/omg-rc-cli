const glob = require( 'glob' )
const pathConfig = require( './path' );
const path = require( 'path' );

const typeOfConfigFile = require('./hasConfigFileType');

function findConfig(type, configFilePath){
    let hasConfig = false;
    let files = [];
    const { fileType = [] } = typeOfConfigFile[type](); 

    for( let i=0; i<fileType.length; i++ ){
        files = glob.sync( `./${fileType[i]}`, { cwd: configFilePath } )
        if( files.length > 0 ){
            hasConfig = true;
            break;
        }
    }; 

    const configPath = files && files.length > 0 ? path.resolve( configFilePath, files[files.length - 1] ) : null;
    return { hasConfig, path: configPath};
}

module.exports = (type, onlyUserConfig) => {
    // 查找用户代码是否有相关配置
    let result = findConfig(type, pathConfig.appPath);

    // 如果没有则使用公共配置
    if(!result.hasConfig && !onlyUserConfig){
        result = findConfig(type, pathConfig.utilsPath);
    }
    return result;
}