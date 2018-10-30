import Share from '../database/share';

export default class Share {
     static save({title,link,author,privite},callback){
	 let share = new Share({
	 	title,link,author,privite
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
