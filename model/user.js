const UserDb = require('../database/user');

module.exports =  class User {
     static async save({name,nickname,avator,email,phone,password}){
		 let user = new UserDb({
			name,
	        nickname,
	        avator,
			email,
			password,
		    phone
		 })
		 return await user.save()
	 }
	 static async find(condition={},opts={}){
		return await UserDb.find(condition,opts)
	 }
}