const { Tokenizer, getSupportedFormats } = require( '@jscpd/tokenizer' );
const {
    MemoryStore,
    Statistic,
    getDefaultOptions
} = require( '@jscpd/core' );
const { getFilesToDetect, InFilesDetector } = require( '@jscpd/finder' );
const errorlog = require('../../extension/console/errorLog');

const { detectClones } = require( "jscpd" );
const crypto = require("crypto");
const DetectorCloneReport = require('./detectorCloneReport');

module.exports = function detectorClone () {

    return new Promise( async ( resolve, reject ) => {
        try {


            // const clones = await detectClones( {
            //     path: [
            //         '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/react-example',
            //         '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/tsx-js-example'
            //     ],
            //     silent: false
            // } );
            // console.dir( clones );

            const opts = {
                minLines: 5,
                maxLines: 500,
                path: [
                    '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/react-example',
                    '/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/src/tsx-js-example'
                ],
            }

            const options = Object.assign(Object.assign({}, getDefaultOptions()), opts);
            options.format = getSupportedFormats();

            const files = getFilesToDetect( options );
            options.hashFunction = (value) => {
                return crypto.createHash('md5').update(value).digest('hex');
            };;

            const tokenizer = new Tokenizer();
            const store = new MemoryStore();
            const statistic = new Statistic( options );

            const detector = new InFilesDetector( tokenizer, store, statistic, options );
            detector.registerReporter(new DetectorCloneReport(options));
            const clones = await detector.detect( files );

        } catch ( err ) {
            errorlog( err );
            resolve( false );
        }

    } )

}