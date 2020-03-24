const script = require( '../modules/script' );
const html = require( '../modules/html' );
const handlebars = require( '../modules/handlebars' );
const style = require( '../modules/style' );
const images = require( '../modules/images' );
const font = require( '../modules/font' );
const svg = require( '../modules/svg' );
module.exports = ( config, targetDir ) => {
    return new Promise( ( resolve, reject ) => {
        // js构建配置
        config = script( config );
        // 配置html
        config = html( config, targetDir );
        // 配置hbs模板引擎
        config = handlebars(config);
        // 配置样式
        config = style( config );
        // 配置图片
        config = images( config );
        // 配置字体文件
        config = font( config );
        // svg处理
        config = svg( config );
        
        
        resolve( config );
    } );
}
