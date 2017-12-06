const Koa = require('koa');
const router = require('koa-router');
const static = require('koa-static');

const app = new Koa();
app.use(static(__dirname + '/public'))
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(8001, function() {
    console.log('rest start!: 8001')
})
