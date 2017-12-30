import mongoose from 'mongoose';

const Product = new mongoose.Schema({
	name: String, 
	price: Number,
	editing: {type: Boolean, default: false}
});

export default mongoose.model('Product', Product);

