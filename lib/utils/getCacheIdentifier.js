const crypto = require('crypto');
const version = require( '../../package.json' ).version;
module.exports = function getCacheIdentifier ( environment, packageName ) {
	let cacheIdentifier = environment == null ? '' : environment.toString();
	let md5 = 'none';
	try {
		const pkg = require( process.cwd() + '/package.json' );
		md5 = crypto.createHash('md5').update(JSON.stringify(pkg)).digest('hex');
	} catch (error) {
		
	}
	cacheIdentifier += `:${packageName}@${version}/${process.version}/${md5}`;
	return cacheIdentifier;
};