const Router = require('koa-router')
const Share = require('../model/share')
let share = new Router()

share.get('/',async (ctx,next)=>{
	console.log('sdfs')
    await ctx.render('index')
})

share.get('/save',async (ctx,next)=>{
	let {err,res} = await Share.save({...ctx.request.query})
	let ret = {
		status:false,
		description:''
	}
	if(err){
		ctx.body = {...ret,description:err}
	}else{
		ctx.body = {...ret,status:true,description:err}
	}
	
})

module.exports = share