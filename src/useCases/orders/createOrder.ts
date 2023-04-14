import { Request, Response } from "express";
import { io } from "../..";
import { Order } from "../../models/Order.model";

export async function createOrder(req: Request, res: Response) {
	try {
		const { ...data } = req.body

		const order = await Order.create({ ...data });
		const orderDetails = order.populate('products.product');

		io.emit('order_new', orderDetails);

		io.on('connection', () => {
			console.log('Conectado');
		})

		res.status(201).json(order);
	}
	catch(error) {
		console.error(error);
		res.sendStatus(500);
	}
}
