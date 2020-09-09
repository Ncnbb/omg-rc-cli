module.exports = class Item {
    constructor( opt ) {
        this.name = opt.name;
        this.path = opt.path;
        this.type = opt.type;
        this.contentHash = opt.contentHash || null;
        this.version = opt.version || null
        this.relys = {};

    }
}