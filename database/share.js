const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const ShareSchema = new Schema({
	      title:  String,
	      link:   String,
	      comments: [{ 
			  body: String, 
			  date: Date,
			  user:{type: Schema.Types.ObjectId, ref: 'User'}
		  }],
	      date: { type: Date, default: Date.now },
	      privite:Boolean,
		  category:{type: Schema.Types.ObjectId, ref: 'Category'},
		  user:{type: Schema.Types.ObjectId, ref: 'User'}
	    });

module.exports =  mongoose.model('Share', ShareSchema);
