const build = require( '../script/build' );
const getCmdDefaultParameter = require('../config/cmdDefaultParameter');
const mergeObject = require('../utils/mergeObject');
module.exports = async function(opt) {
    const { path = null, dir = null, env = {}, options = {}, config = null } = opt;
    // 合拼默认配置
    const result = await build( path, dir, env, mergeObject( getCmdDefaultParameter('build'), options), config );
    if ( result ) {
        return true;
    } else {
        return false;
    }
}