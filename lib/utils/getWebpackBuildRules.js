const script = require('../modules/script');
const html = require('../modules/html');
const style = require('../modules/style');
module.exports = (config) => {
    return new Promise((resolve, reject) => {

        // js构建配置
        config = script(config);
        // 配置html
        config = html(config);
        // 配置样式
        config = style(config);
        resolve(config);
    });
}
