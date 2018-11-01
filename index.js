let db = require('./database/db')
let Koa = require('koa')
let Router = require('koa-router')
let Static = require('koa-static')
let Views = require('koa-views')
let path = require('path')
let bodyParser = require('koa-bodyparser');
let share = require('./route/share')
let app = new Koa()
let router = new Router()
app.use(bodyParser())
app.use(Static(
    path.join( __dirname, './static')
))

app.use(Views(path.join(__dirname, './static'), {
	  extension: 'html'
}))

router.get('/',async (ctx,next)=>{
	 console.log('sfsd')
     await ctx.render('index')
})

router.use('/share',share.routes(),share.allowedMethods())

app.use(router.routes())

app.listen('8989')
