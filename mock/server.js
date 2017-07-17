const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const koaBody = require('koa-body');
app.use(koaBody({multipart: true}));  

// 登录信息
let loginInfo = require('./loginAndSign/loginAndSign.js');
router.get('/api/loginInfo', async (ctx) => {
	ctx.body = loginInfo;
});

// 注册信息
router.post('/api/signInfo', async (ctx) => {
	const data = ctx.request.body;
	console.log('新注册用户：');
	console.log(data);
	loginInfo.push(data);
	console.log('所有已注册用户：');
	console.log(loginInfo);
	ctx.body = {
        errno: 0,
        msg: 'ok'
    }
});

app.use(router.routes())
	.use(router.allowedMethods());
app.listen(3000);

