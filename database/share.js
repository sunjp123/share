const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const ShareSchema = new Schema({
	      title:  String,
	      author: String,
	      link:   String,
	      comments: [{ body: String, date: Date }],
	      date: { type: Date, default: Date.now },
	      privite:Boolean,
		  category:{type: Schema.Types.ObjectId, ref: 'Category'}
	    });

module.exports =  mongoose.model('Share', ShareSchema);
