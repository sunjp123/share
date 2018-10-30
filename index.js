let db = require('./database/db')
let Koa = require('koa')
let Router = require('koa-router')
let Static = require('koa-static')
let Views = require('koa-views')
let path = require('path')
let app = new Koa()
let router = new Router()

app.use(Static(
    path.join( __dirname, './static')
))

app.use(Views(path.join(__dirname, './static'), {
	  extension: 'html'
}))

router.get('/',async (ctx,next)=>{
     await ctx.render('index')
})

app.use(router.routes())

app.listen('8989')
