const Router = require('koa-router')
const Share = require('../model/share')
const Category = require('../model/category')
let share = new Router()

share.get('/',async (ctx,next)=>{
    await ctx.render('index')
})

// share.get('/save',async (ctx,next)=>{
// 	let {err,res} = await Share.save({...ctx.request.query})
// 	ctx.body = {
// 		status:err?false:true,
// 		err,
// 		res
// 	}
// })
share.get(['/list','/list/:user'],async (ctx,next)=>{
	let res  = await Share.find({uid:ctx.params.uid},{comments:false,privite:false})
	ctx.body = {
		status:res&&res.length?true:false,
		res
	}	
})
share.all(['/save/category'],async (ctx,next)=>{
	let {name,belong} = ctx.request.body || ctx.request.query
	let res = await Category.save({name,belong})
	ctx.body = {
		status:true,
		res
	}
})
module.exports = share