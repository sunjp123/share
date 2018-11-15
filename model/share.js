const Sharedb = require('../database/share');

module.exports = class Share {
     static async save({category,title,link,author,privite,target,description}){
		 let share = new Sharedb({
			category,title,link,author,privite,target,description
		 })
		return await share.save()
	 }
	 static async find(condition={},opts={}){
		return await Sharedb.find(condition,opts)
	 }
}
