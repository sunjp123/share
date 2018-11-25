const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const koaBody = require('koa-body')
const Share = require('../model/share')
const Category = require('../model/category')
const { publish } = require('../bin/redisClient')
let share = new Router()

// share.get('/',async (ctx,next)=>{
//     await ctx.render('index')
// })

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
share.all(['/share/list','/share/list/:user'],async (ctx,next)=>{
	let { user ='' } = ctx.params  
	let res  = await Category.find(user?{belong:user}:{publicFlag:true})
	ctx.body = {
		status:true,
		res
	}	
})
share.all(['/share/save/category'],async (ctx,next)=>{
	let {name,publicFlag=true,_id=''} = ctx.request.body || ctx.request.query,res = {};
	
	if(_id){
		let category = await Category.find({_id})
		category[0].name = name;
		category[0].publicFlag = publicFlag;
		res = await category[0].save()
		publish('share-message','share-message',JSON.stringify({
			type:'CATEGORY_MODIFY',
			body:res
		}))
	}else{
		let user = ctx.session.user
		res = await Category.save({name,belong:user?user._id:'',publicFlag})
		publish('share-message','share-message',JSON.stringify({
			type:'CATEGORY_MODIFY',
			body:res
		}))
	}
	
	ctx.body = {
		status:true,
		res
	}
})
share.all(['/share/delete/category/:_id'],async (ctx,next)=>{
	let {_id} = ctx.params ,res = {};

	res = await Category.delete({_id})

	ctx.body = {
		status:true,
		res
	}
})

share.use(['/share/save/item'],koaBody({multipart: true})).all(['/share/save/item'],async (ctx,next)=>{
	if(!(ctx.request.files || ctx.request.body.files)) {
		ctx.request.body.icon = ''
		return await next()
	}

	let {icon} = ctx.request.files || ctx.request.body.files
	if(!icon || !icon.path) {
		ctx.request.body.icon = ''
		return await next()
	}
	// 创建可读流
	const reader = fs.createReadStream(icon.path);
	let filePath = path.join(__dirname, '../static/upload/') + `${icon.name}`;
	// 创建可写流
	const upStream = fs.createWriteStream(filePath);
	// 可读流通过管道写入可写流
	reader.pipe(upStream);

	ctx.request.body.icon = `/upload/${icon.name}`

	return await next()
}).all(['/share/save/item'],async (ctx,next)=>{
	let {category,title,link,public=true,target,description='',icon='',_id=''} = ctx.request.body || ctx.request.query
	let categories = await Category.findCategory({_id:category}),res = null;
	if(categories&&categories.length>0){
		if(_id){
			let list = await Share.find({_id})
			res = list[0]
			res.title = title
			res.link = link
			res.public = public
			res.target = target
			res.description = description
			res.icon = icon?icon:res.icon
			await res.save()
		}else{
			let user = ctx.session.user
			res = await Share.save({category,title,link,author:user?user._id:'',public,target,description,icon})
			categories[0].children.push(res._id)
			await categories[0].save()
		}
	}
	ctx.body = {
		status:true,
		res
	}
})
share.all(['/share/delete/category/:category/item/:_id'],async (ctx,next)=>{
	let {category,_id} = ctx.params ,res = {};
	res = await Category.deleteItem(category,_id)
	if(res.ok){
		res = await Share.findByIdAndRemove(_id)
	}
	ctx.body = {
		status:true,
		res
	}
})
module.exports = share