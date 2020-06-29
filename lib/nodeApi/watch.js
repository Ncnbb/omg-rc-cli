const watch = require( '../script/watch' );
const getCmdDefaultParameter = require('../config/cmdDefaultParameter');
const mergeObject = require('../utils/mergeObject');
module.exports = async function(opt) {
    const { path = null, dir = null, env = {}, options = {}, config = null } = opt;
    // 强制开启
    options.console = true;
    options.prompt = true;
    options.progress = true;
    // 合拼默认配置
    const result = await watch( path, dir, env, mergeObject( getCmdDefaultParameter('watch'), options), config );
    if ( result ) {
        return true;
    } else {
        return false;
    }
}