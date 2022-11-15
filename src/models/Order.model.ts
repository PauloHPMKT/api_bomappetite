import { model, Schema } from 'mongoose';

export const Order = model('order', new Schema({
	table: {
		type: String,
		required:true,
	},
	status: { //status receive type enum
		type: String,
		enum: ['WAITING','IN_PRODUCTION', 'DONE'],
		default: 'WAITING',
		required: true,
	},
	// if you don't call the function notation, mongoose will only save the default date when doc is save
	createdAt: { type: Date, default: Date.now },
	products: {
		required: true,
		type: [{
			product: {
				type: Schema.Types.ObjectId,
				ref: 'product',
				required: true,
			},
			quantity: {
				type: Number,
				default: 1,
			},
		}],
	},
}));
