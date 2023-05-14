import mongoose from "mongoose";
const ENV_DB_PATH = process.env.NODE_ENV || "production";
//const config = require("../../config/index")[ENV_DB_PATH]

export const dbConnection = () => {
	//if (config) mongoose.connect(config.development.DB_STRING_DEV_URI || config.production.DB_STRING_PROD_URI)
	mongoose.connect(process.env.DB_STRING_DEV_URI ? process.env.DB_STRING_DEV_URI : '')

	const db = mongoose.connection;

	db.once('open', () => console.log('its ok, mongo connection sucessed'));

	db.on('error', console.error.bind(console, 'mongo connection error'))
}
