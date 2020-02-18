const script = require('../modules/script');
const html = require('../modules/html');

module.exports = (config) => {
    return new Promise((resolve, reject) => {

        // js构建配置
        config = script(config);
        // 配置html
        config = html(config);
        resolve(config);
    });
}
