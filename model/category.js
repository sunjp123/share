const CategoryDb = require('../database/category');

module.exports =  class Category {
     static async save({name,belong}){
		 let category = new CategoryDb({
			name,
			belong
		 })
		 return await category.save()
	 }
	 static async findCategory(condition={},opts={}){
		return await CategoryDb.find(condition,opts)
	 }
	 static async find(condition={},opts={}){
		return await CategoryDb.find(condition,opts).populate('children').exec()
	 }
}
