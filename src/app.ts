import express, { Application } from 'express';
import path from 'node:path';
import http  from 'node:http';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import { router } from './router';

export class App {
	private server = http.createServer(this.app);
	private io = new Server(this.server);

	constructor(private app: Application = express()) {
		this.middlewares();
		this.database();
		this.routes();
		this.socket();
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
	}

	private database() {
		mongoose
			.connect(process.env.DB_CONNECTION as string)
			.then(() => console.log('Database is connected'))
			.catch(() => console.log('Database is not connected'));
	}

	private routes() {
		this.app.use(router);
	}

	private socket() {
		this.io.on('connection', () => {
			console.log('Conectado');
		});
	}

	public start(port: number) {
		const PORT = port;
		this.server.listen(PORT, () => {
			console.log(`Server is running on port http://localhost:${PORT}`);
		});
	}
}

// const app = express();
// const server = http.createServer(app)
// export const io = new Server(server)

// //mongo db conection - stabelishing connection api when database is up
// mongoose.connect(process.env.DB_CONNECTION as string)
// .then(() => {

// 		/*io.on('connection', () => {
// 			console.log('Conectado');
// 		})*/
// 		//habilitando cors
// 		app.use((req, res, next) => {
// 			res.setHeader('Access-Control-Allow-Origin', '*')
// 			res.setHeader('Access-Control-Allow-Methods', '*')
// 			res.setHeader('Access-Control-Allow-Headers', '*')

// 			next()
// 		})
// 		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
// 		app.use(express.json())
// 		app.use(router);

// 		const PORT = 3008

// 		server.listen(PORT, () => {
// 			console.log(`Server is running on port http://localhost:${PORT}`)
// 		})
// 	})
// 	.catch(() => console.log('error conection'))
