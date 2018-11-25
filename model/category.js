const CategoryDb = require('../database/category');

module.exports =  class Category {
     static async save({name,belong,publicFlag}){
		 let category = new CategoryDb({
			name,
			belong,
			publicFlag
		 })
		 return await category.save()
	 }
	 static async findCategory(condition={},opts={}){
		return await CategoryDb.find(condition,opts)
	 }
	 static async find(condition={},opts={}){
		return await CategoryDb.find(condition,opts).populate('children').exec()
	 }
	 static async delete(condition){
		 return await CategoryDb.deleteOne(condition)
	 }
	 static async deleteItem(_id,_item){
		 return await CategoryDb.update({_id},{$pull:{children:{$in:[_item]}}})
	 }
}
