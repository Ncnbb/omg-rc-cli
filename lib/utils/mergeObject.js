function mergeObject(object1, object2) {
    for ( let item in object2 ) {
        if (!object1[item]) {
            object1[item] = object2[item];
        } else {
            const curr = object2[item];
            if ( Object.prototype.toString.call( curr ) == '[object Date]' ) {
                object1[item] = new Date( curr );
            } else if ( Object.prototype.toString.call( curr ) == '[object Null]' ) {
                object1[item] = null;
            } else if ( Object.prototype.toString.call( curr ) == '[object Array]' ) {
                object1[item] = [].concat(object1[item], object2[item]);
            } else if ( Object.prototype.toString.call( curr ) == '[object RegExp]' ) {
                object1[item] = new RegExp( curr );
            } else if ( Object.prototype.toString.call( curr ) == '[object Object]' ) {
                mergeObject( object1[item], object2[item] );
            } else {
                object1[item] = curr;
            }
        }
    }
    return object1;
}

module.exports = mergeObject;