const fs = require('fs');
const path = require('path');
const program = require( 'commander' );
module.exports = () => {
    const fsContent = fs.readFileSync(path.resolve(__dirname, './logo.txt'), 'utf8');
    console.log(`${fsContent}`.green);
    program.help();
}