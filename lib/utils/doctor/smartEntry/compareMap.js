




function compareRely(oldRely, newRely) {

    const relys = Object.keys(newRely);
    for ( let i = 0; i < relys.length; i++ ) {

        const relyName = relys[i];

        // 新增了依赖，直接返回需要编译
        if ( !oldRely[relyName] ) {
            return false;
        }

        const { type: o_type, version: o_version, contentHash: o_contentHash } = oldRely[relyName];
        const { type: n_type, version: n_version, contentHash: n_contentHash } = newRely[relyName];

        // 名字相同，类型不同了
        if ( o_type != n_type ) return false;

        switch(n_type) {
            case 'module' : if (n_version != o_version) return false;
            break;
            default: if (n_contentHash != o_contentHash) return false;
        }
    }

    return true;
}


module.exports = function compareMap ( oldJSON, newJSON ) {
    const entrys = Object.keys(newJSON);
    const buildEntrys = [];

    for ( let i = 0; i < entrys.length; i++ ) {

        const entryName = entrys[i];
        // 新的入口
        if ( !oldJSON[entryName] ) {
            buildEntrys.push(entryName);
            continue;
        }

        const o_entryData = oldJSON[entryName];
        const n_entryData = newJSON[entryName];

        if (!compareRely(o_entryData, n_entryData) ) {
            buildEntrys.push(entryName);
        }

    }
    return buildEntrys;
}