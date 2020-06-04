class OutputAssets {
    constructor() {
        this.defaultOpt = {};
    }

    apply ( compiler ) {

        compiler.hooks.afterEmit.tap( 'OutputAssets', ( compilation ) => {
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
        } )

    }
}

module.exports = OutputAssets;