module.exports = function checkIsConsole () {
    return process.env.OMG_CONSOLE == '1';
}