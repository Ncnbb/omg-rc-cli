const fs = require('fs');
const path = require('path');

class OutputAssets {
    constructor(opt) {
        this.outputPath = opt.path;
        this.fileName = 'assets';
    }

    apply ( compiler ) {
        compiler.hooks.afterEmit.tap( 'OutputAssets', ( compilation ) => {

            if ( !this.outputPath) return null;
            if (!fs.existsSync(this.outputPath)) {
                fs.mkdirSync(this.outputPath);
            }


            var stats = compilation.getStats().toJson( {
                hash: true,
                publicPath: true,
                assets: true,
                chunks: false,
                modules: false,
                source: false,
                errorDetails: false,
                timings: false
            } )

            const assetsMap = {};
            for ( let key in stats.entrypoints ) {
                assetsMap[key] = stats.entrypoints[key]['assets'];
            }

            fs.writeFileSync( path.resolve(this.outputPath, `${this.fileName}.json`), JSON.stringify(assetsMap, null, "\t"), null, 4 );
        } )

    }
}

module.exports = OutputAssets;