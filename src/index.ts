import express from 'express';
import mongoose from 'mongoose';

//mongo db conection - stabelishing connection api when database is up
mongoose.connect('mongodb://localhost:27017/db-opjs')
.then(() => {
		const app = express();
		const PORT = 3008

		app.listen(PORT, () => {
			console.log(`Server is running on port http://localhost:${PORT}`)
		})
	})
	.catch(() => console.log('error conection'))

