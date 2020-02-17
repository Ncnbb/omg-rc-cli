const version = require( '../../package.json' ).version;
module.exports = function getCacheIdentifier ( environment, packageName ) {

	let cacheIdentifier = environment === null ? '' : environment.toString();
	cacheIdentifier += `:${packageName}@`;
	try {
		cacheIdentifier += version;
	} catch ( _ ) {
		// ignored
	}
	return cacheIdentifier;
};