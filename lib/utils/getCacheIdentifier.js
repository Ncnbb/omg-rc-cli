const crypto = require('crypto');
const pkg = require( process.cwd() + '/package.json' );
const version = require( '../../package.json' ).version;

module.exports = function getCacheIdentifier ( environment, packageName ) {
	let cacheIdentifier = environment == null ? '' : environment.toString();
	const md5 = crypto.createHash('md5').update(JSON.stringify(pkg)).digest('hex');
	cacheIdentifier += `:${packageName}@`;
	try {
		cacheIdentifier += `${version}/${md5}`;
	} catch ( _ ) {
		// ignored
	}
	return cacheIdentifier;
};