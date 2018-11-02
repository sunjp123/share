const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const ShareSchema = new Schema({
	      name:  String,
	      nickname: String,
	      avator:   String,
		  email: String,
		  phone: String
	    });

module.exports =  mongoose.model('User', ShareSchema);
