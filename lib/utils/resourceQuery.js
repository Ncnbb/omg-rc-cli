module.exports = {
    isInline: function isInline ( queryStr ) {
        return queryStr === '?__inline';
    },
    isUrl: function isDefault ( queryStr ) {
        return queryStr === '?__url';
    },
    isSprite: function isDefault ( queryStr ) {
        return queryStr === '?__sprite';
    }
}