
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const koaBody = require('koa-body')
const {JSEncrypt} = require('jsencrypt')
const User = require('../model/user')
const validate = require('../util/validate')
const privateKey = fs.readFileSync('./rsa_1024_priv.pem').toString()
let userRouter = new Router()


userRouter.all('/user/login',async (ctx,next)=>{
    let { contact , password } = ctx.request.body,condition = {};

    if(!contact || !password){
        return ctx.body = {
            status:false
        }
    }

    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    password = decrypt.decrypt(password);
    condition = {password:password}

    if(validate.isEmail(contact)){
        condition = {...condition,email:contact}
    }else if(validate.isPhone(contact)){
        condition = {...condition,phone:contact}
    }else{
        condition = {...condition,nickname:contact}
    }
    let res =  await User.find(condition,{password:0})

    if(!res || res.length <= 0){
        return ctx.body = {
            status:false
        }
    }else{
        ctx.session.user = res[0]
        return ctx.body = {
            status:true
        }
    }
})

userRouter.all('/user/logout',async (ctx,next)=>{
    ctx.session.user = ''
    return ctx.body = {
        status:true
    }
})

userRouter.use(['/user/register','/user/modify'],koaBody({multipart: true})).all(['/user/modify'],async (ctx,next)=>{
	if(!(ctx.request.files || ctx.request.body.files)) {
		ctx.request.body.avator = ''
		return await next()
	}

	let {avator} = ctx.request.files || ctx.request.body.files
	if(!avator || !avator.path) {
		ctx.request.body.avator = ''
		return await next()
	}
	// 创建可读流
	const reader = fs.createReadStream(avator.path);
	let filePath = path.join(__dirname, '../static/avator/') + `${avator.name}`;
	// 创建可写流
	const upStream = fs.createWriteStream(filePath);
	// 可读流通过管道写入可写流
	reader.pipe(upStream);

	ctx.request.body.avator = `/avator/${avator.name}`

	return await next()
}).all('/user/register',async (ctx,next)=>{
    let { name , nickname , contact , password , avator} = ctx.request.body,condition = {} ,res = '',isEmail = false;

    if(!contact || !password || !name || !nickname){
        return ctx.body = {
            status:false,
            type:'EMPTY'
        }
    }
    condition = {nickname}
    res =  await User.find(condition)
    if(res && res.length > 0){
        return ctx.body = {
            status:false,
            type:'NICKNAME_EXIST'
        }
    }

    if(validate.isEmail(contact)){
        isEmail = true
        condition = {email:contact}
        res =  await User.find(condition)
        if(res && res.length>0){
            return ctx.body = {
                status:false,
                type:'EMAIL_EXIST'
            }
        }
    }else if(validate.isPhone(contact)){
        condition = {phone:contact}
        res =  await User.find(condition)
        if(res && res.length>0){
            return ctx.body = {
                status:false,
                type:'PHONE_EXIST'
            }
        }
    }else{
        return ctx.body = {
            status:false,
            type:'CONTACT'
        }
    }

    
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    password = decrypt.decrypt(password);

    res = await User.save({ name , nickname , password , avator,email:isEmail?contact:'',phone:!isEmail?contact:''})
    if(!res){
        return ctx.body = {
            status:false,
            type:'SAVE_ERROR'
        }
    }else{
        ctx.session.user = res
        return ctx.body = {
            status:true,
        }
    }
})

userRouter.all('/user/modify',async (ctx,next)=>{
    let {_id , name , nickname , contact , password , avator} = ctx.request.body,condition = {} ,res = '',isEmail = false;

    if(!contact || !password || !name || !nickname){
        return ctx.body = {
            status:false,
            type:'EMPTY'
        }
    }
    condition = {nickname}
    res =  await User.find(condition)
    if(res && res.length > 0){
        return ctx.body = {
            status:false,
            type:'NICKNAME_EXIST'
        }
    }
    
    if(validate.isEmail(contact)){
        isEmail = true
        condition = {email:contact}
        res =  await User.find(condition)
        if(res && res.length>0){
            return ctx.body = {
                status:false,
                type:'EMAIL_EXIST'
            }
        }
    }else if(validate.isPhone(contact)){
        condition = {phone:contact}
        res =  await User.find(condition)
        if(res && res.length>0){
            return ctx.body = {
                status:false,
                type:'PHONE_EXIST'
            }
        }
    }else{
        return ctx.body = {
            status:false,
            type:'CONTACT'
        }
    }

    
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    password = decrypt.decrypt(password);
    res = await User.find({_id})

    if(!res || res.length <= 0){
        return ctx.body = {
            status:false,
            type:'MODIFY_ERROR'
        }
    }else if(res && res.length > 0){
        let user = Object.assign(res[0],{
            name , 
            nickname ,
            password ,
            avator:avator?avator:res[0].avator,
            email:isEmail?contact:'',phone:!isEmail?contact:''
        })
        await user.save();
        ctx.session.user = res[0]
        return ctx.body = {
            status:true,
        }
    }
})

module.exports = userRouter