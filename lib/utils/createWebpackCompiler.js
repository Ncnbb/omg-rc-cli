const webpack = require('webpack');
const SpeedMeasurePlugin = require( "speed-measure-webpack-plugin" );
                
module.exports = (config) => {
    return new Promise((resolve, reject) => {
		if ( config.smp ) {
			const smp = new SpeedMeasurePlugin();
			delete config.smp;
			config = smp.wrap(config);
		}
		delete config.smp;

        let compiler;
		try {
			compiler = webpack(config);
			resolve({compiler, config});
		} catch (err) {
			reject(err);
		}
    });
}