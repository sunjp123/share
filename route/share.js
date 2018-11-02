const Router = require('koa-router')
const Share = require('../model/share')
let share = new Router()

share.get('/',async (ctx,next)=>{
    await ctx.render('index')
})

share.get('/save',async (ctx,next)=>{
	let {err,res} = await Share.save({...ctx.request.query})
	ctx.body = {
		status:err?false:true,
		err,
		res
	}
	
})
share.param('user', (id, ctx, next) => {
		return next();
	  })
	 .get('/list/:user',async (ctx,next)=>{
		let res  = await Share.find({uid:ctx.params.uid},{comments:false,privite:false})
		ctx.body = {
			status:res&&res.length?true:false,
			res
		}	
	 })

module.exports = share