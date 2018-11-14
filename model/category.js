const CategoryDb = require('../database/category');

module.exports =  class Category {
     static async save({name,belong}){
		 let category = new CategoryDb({
			name,
			belong
		 })
		 return await category.save()
     }
}
