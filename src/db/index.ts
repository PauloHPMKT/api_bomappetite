import mongoose from "mongoose";

export const dbConnection = () => {
	mongoose.connect('mongodb://db:27017/microsservice?authSource=food-square-db');

	const db = mongoose.connection;

	db.once('open', () => console.log('its ok, mongo connection sucessed'));

	db.on('error', console.error.bind(console, 'mongo connection error'))
}
