const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	    title:  String,
	});

export default mongoose.model('Category', categorySchema);
