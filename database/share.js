const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shareSchema = new Schema({
	      title:  String,
	      author: String,
	      link:   String,
	      comments: [{ body: String, date: Date }],
	      date: { type: Date, default: Date.now },
	      privite:Boolean
	    });

export default mongoose.model('Share', shareSchema);
