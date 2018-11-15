const Router = require('koa-router')
const Share = require('../model/share')
const Category = require('../model/category')
let share = new Router()

share.get('/',async (ctx,next)=>{
    await ctx.render('index')
})

share.get('/views/:dir/:subdir/:page',async (ctx,next)=>{
	let {dir,subdir,page} = ctx.params
    await ctx.render(`views/${dir}/${subdir}/${page}`)
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
	let res  = await Category.find()
	ctx.body = {
		status:true,
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

share.all(['/save/item'],async (ctx,next)=>{
	let {category,title,link,author,privite,target,description} = ctx.request.body || ctx.request.query
	console.log(category)
	let categories = await Category.findCategory({_id:category}),res = null;
	console.log(categories)
	if(categories&&categories.length>0){
		res = await Share.save({category,title,link,author,privite,target,description})
		console.log(res)
		categories[0].children.push(res._id)
		await categories[0].save()
	}
	ctx.body = {
		status:true,
		res
	}
})
module.exports = share