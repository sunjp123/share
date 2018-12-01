const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const koaBody = require('koa-body')
const Share = require('../model/share')
const Category = require('../model/category')
const { publish } = require('../bin/redisClient')
const { REDIS_MESSAGE } = require('../config/constConfig')
const sharePublish = publish(REDIS_MESSAGE.SHARE_MESSAGE.KEY,REDIS_MESSAGE.SHARE_MESSAGE.EVENT)
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
	let {name,publicFlag=true,shareFlag=false,_id=''} = ctx.request.body || ctx.request.query,res = {};
	
	if(_id){
		let category = await Category.find({_id})
		category[0].name = name;
		category[0].publicFlag = publicFlag;
		category[0].shareFlag = shareFlag;
		res = await category[0].save()
		sharePublish({
			user:ctx.session.user._id,
			type:'CATEGORY_MODIFY',
			body:`${ctx.session.user.name}修改了${res.name}`
		})
	}else{
		let user = ctx.session.user
		res = await Category.save({name,belong:user?user._id:'',publicFlag,shareFlag})
		if(res.publicFlag){
			sharePublish({
				user:ctx.session.user._id,
				type:'CATEGORY_SAVE',
				body:`${ctx.session.user.name}创建了${res.name}`
			})
		}
	}
	ctx.body = {
		status:true,
		res
	}
})
share.all(['/share/delete/category/:_id'],async (ctx,next)=>{
	let {_id} = ctx.params ,category = {},res = {};
	category = await Category.findById(_id)
	if(category.belong != ctx.session.user._id) {
		return ctx.body = {
			status:false
		}
	}
	res = await Category.delete({_id})
	if(category.publicFlag){
		sharePublish({
			user:ctx.session.user._id,
			type:'CATEGORY_DELETE',
			body:`${ctx.session.user.name}删除了${category.name}`
		})
	}
    

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