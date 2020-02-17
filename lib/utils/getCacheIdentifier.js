const version = require( '../../package.json' ).version;
module.exports = function getCacheIdentifier ( environment, packageName ) {

	console.log(process.env.OMG_ENV);

	let cacheIdentifier = environment === null ? '' : environment.toString();
	cacheIdentifier += `:${packageName}@`;
	try {
		cacheIdentifier += version;
	} catch ( _ ) {
		// ignored
	}
	return cacheIdentifier;
};
