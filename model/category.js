const CategoryDb = require('../database/category');

module.exports =  class Category {
     static async save({title}){
		 let category = new CategoryDb({
			title
		 })
		 let {err,res} = await category.save()
		 return {err,res}
     }
}
