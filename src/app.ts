import express from 'express';
import path from 'node:path';
import http  from 'node:http';
import { Server } from 'socket.io';
import { dbConnection } from './db';
import routers from './routers/index';

const app = express();
export const server = http.createServer(app)
export const io = new Server(server)

dbConnection();

/*io.on('connection', () => {
	console.log('Conectado');
})*/
//habilitando cors
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');

	next();
})

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());

// importing router instance
app.use(routers);
