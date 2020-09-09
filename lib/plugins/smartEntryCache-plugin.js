const {saveToCache} = require('../utils/smartEntry/cache');
class SmartEntryCache {
    constructor(opt) {
        this.relyCacheJSON = opt.data;
    }

    apply ( compiler ) {
        compiler.hooks.afterEmit.tap( 'SmartEntryCache', ( compilation ) => {
            saveToCache(this.relyCacheJSON);
        } )
    }
}

module.exports = SmartEntryCache;