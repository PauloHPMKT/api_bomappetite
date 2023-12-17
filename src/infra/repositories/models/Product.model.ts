import { model, Schema } from 'mongoose';

export const Product = model('products', new Schema({
	name: {
		type: String,
		required:true
	},
	description: {
		type: String,
		required: true
	},
	imagePath: {
		type: String,
		required: true
	},
	pricing: {
		type: Number,
		required: true
	},
	//salvando array no mongo
	ingredient: {
		required: true,
		type: [{
			name: { type: String, required:true },
			icon: { type: String,  required: true },
		}]
	},
	category: {
		required: true,
		type: Schema.Types.ObjectId,
		ref: 'categories'
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date
	},
}));
