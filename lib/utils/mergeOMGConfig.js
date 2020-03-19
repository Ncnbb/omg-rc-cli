const fs = require('fs');
const path = require('path');
const {pathConfig, setPathConfig} = require('../utils/path');
const mergeObject = require('../utils/mergeObject');
module.exports = (config) => {

    const { appPath } = pathConfig;
    const OMG_CONFIG_FILE = path.resolve(appPath, 'omg.config.js');

    if ( fs.existsSync(OMG_CONFIG_FILE) ) {

        const customOMGConfig = require(OMG_CONFIG_FILE);
        // 当发现项目中存在配置文件，那么将进行合拼
        let newConfig = mergeObject(config, customOMGConfig)
        setPathConfig('appDist', newConfig.output.path);
        return newConfig;
    }


    return config;

}