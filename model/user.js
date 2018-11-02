const UserDb = require('../database/user');

module.exports =  class User {
     static async save({name,nickname,avator,email,phone}){
		 let user = new UserDb({
			name,
	        nickname,
	        avator,
		    email,
		    phone
		 })
		 let {err,res} = await user.save()
		 return {err,res}
     }
}