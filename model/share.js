const Sharedb = require('../database/share');

module.exports = class Share {
     static async save({title,link,author,privite}){
		 let share = new Sharedb({
			title,link,author,privite
		 })
		 let {err,res} = await share.save()
		 return {err,res}
	 }
	 static async find(condition={},opts={}){
		return await Sharedb.find(condition,opts)
	 }
}
