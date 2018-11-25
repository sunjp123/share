const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
		name:  String,
		publicFlag: Boolean,
		children:[{type: Schema.Types.ObjectId, ref: 'Share'}],
		belong:{type: Schema.Types.ObjectId, ref: 'User'}
	});

module.exports = mongoose.model('Category', categorySchema);
