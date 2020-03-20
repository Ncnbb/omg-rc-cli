const webpack = require('webpack');

module.exports = (config) => {
    return new Promise((resolve, reject) => {
        let compiler;
		try {
			compiler = webpack(config);
			resolve({compiler, config});
		} catch (err) {
			reject(err);
		}
    });
}