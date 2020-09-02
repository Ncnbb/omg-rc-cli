const acorn = require("acorn");
const jsx = require("acorn-jsx");
const parse = acorn.Parser.extend(jsx());

module.exports = function smartEntry(entry) {

    console.log(entry);
    

}