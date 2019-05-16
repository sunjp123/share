global.navigator = {};
global.window = global;
global.window.crypto = require('crypto')
const Koa = require('koa')
const fs = require('fs')
const Router = require('koa-router')
const Static = require('koa-static')
const helmet = require('koa-helmet')
const Ejs = require('koa-ejs')
const Views = require('koa-views')
const Logger = require('koa-logger')
const path = require('path')
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const socketServer = require('socket.io');

const share = require('./route/share');
const user = require('./route/user');
const file = require('./route/file');

const CONFIG = require('./config/sessionConfig')
const publicKey = fs.readFileSync('./rsa_1024_pub.pem').toString()

const app = new Koa()

const server = require('http').createServer(app.callback())

const io = require('./bin/shareMessage')(socketServer(server,{path:'/share/socket.io'}))



Ejs(app,{
    root:path.join(__dirname,'./static'),
    layout:'',
    viewExt: 'html',
    cache: true,
    debug: false
})

const router = new Router()

app.keys = ['sun share secret'];

app.use(helmet())

app.use(session(CONFIG, app));

app.use(bodyParser())

app.use(Views(path.join(__dirname, './static'), {
	  extension: 'html'
}))

router.use(async (ctx,next)=>{
    let { appname } = ctx.request.header;
    if(appname){
        global.navigator = {appname}
    }
    await next()
})
router.get('/',async (ctx,next)=>{
    await ctx.response.redirect('/share/view/public')
})
router.get('/login/weixin',async (ctx,next)=>{
    console.log('login weixin')
    await next()
    ctx.body = {
        status:true
    }
})
router.get('/share/view/*',async (ctx,next)=>{
    if(ctx.request.url!='/share/view/public' && !ctx.session.user){
        await ctx.response.redirect('/share/view/public')
    }else{
        await next()
    }
})
router.get('/share',async (ctx,next)=>{
    await ctx.response.redirect('/share/view/public')
})

router.get(['/share/view/*'],async (ctx,next)=>{
    await ctx.render('index',{__user__:JSON.stringify(ctx.session.user),__publicKey__:publicKey})
    await next()
})
router.use('/share/api',async (ctx,next)=>{
    if(ctx.session.user || /(\/api\/user\/(?:login|register|captcha|send)\??|\/api\/share\/list\??){1}/.test(ctx.request.url)){
        await next()
    }else{
        ctx.body = {
            status:false
        }	
    }
})

router.use('/share/api',share.routes(),user.routes(),file.routes(),share.allowedMethods())

app.use(router.routes())

app.use(Static(
    path.join( __dirname, './static'),{
        maxAge:365*3600*24,
        gzip:true
    }
))

app.use(Logger())

server.listen('3001')
