const Koa = require('koa');
const app = new Koa();
const path = require('path');
const KoaStatic = require('koa-static');

app.use(KoaStatic(path.join( __dirname, './static')));

app.listen(7001, '127.0.0.1');

console.log('服务启动成功，127.0.0.1:7001')