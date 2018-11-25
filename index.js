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
const CONFIG = require('./config/sessionConfig')
const publicKey = fs.readFileSync('./rsa_1024_pub.pem').toString()

const app = new Koa()

const server = require('http').createServer(app.callback())

const io = require('./bin/message')(socketServer(server))


Ejs(app,{
    root:path.join(__dirname,'./static'),
    layout:'',
    viewExt: 'html',
    cache: false,
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
router.get('',async (ctx,next)=>{
    await ctx.response.redirect('/view/public')
})

router.get(['/view/*'],async (ctx,next)=>{
    await ctx.render('index',{__user__:JSON.stringify(ctx.session.user),__publicKey__:publicKey})
    await next()
})

router.use('/api',share.routes(),user.routes(),share.allowedMethods())

app.use(router.routes())

app.use(Static(
    path.join( __dirname, './static')
))

app.use(Logger())

server.listen('3001')
