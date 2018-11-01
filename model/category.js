import Category from '../database/share';

export default class Category {
     static save({title},callback){
		 let share = new Share({
			title
		 })
		 share.save((err,res)=>{
			  if(err){
				  callback(false)
			  }else{
				  callback(res)
			  }
		 })
     }
}
