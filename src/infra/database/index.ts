import mongoose from "mongoose"
import { configs } from "../../configs"

export const dbConnect = () => {
	const envConfigService = configs.environment;
	mongoose.connect(envConfigService.getDbConnectionEnv());
	const db = mongoose.connection;

	db.once('open', () => {
		console.log('Mongo OK - Database connected with success!');
	});

	db.on('error', () => {
		console.error('Mongo ERROR - Connection failed!');
	});
}
