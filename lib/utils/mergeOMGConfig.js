const fs = require('fs');
const path = require('path');
const {pathConfig} = require('../utils/path');
const mergeObject = require('../utils/mergeObject');
module.exports = (config) => {

    const { appPath } = pathConfig;
    const OMG_CONFIG_FILE = path.resolve(appPath, 'omg.config.js');
    // console.log('-----------default -------------');
    // console.log(config);

    if ( fs.existsSync(OMG_CONFIG_FILE) ) {

        const customOMGConfig = require(OMG_CONFIG_FILE);
        // console.log('-----------custom -------------');
        // console.log(customOMGConfig);
        // 当发现项目中存在配置文件，那么将进行合拼
        let newConfig = mergeObject(config, customOMGConfig)
        // console.log('-----------new -------------');
        // console.log(newConfig);
    }

    return config;

}