import { Request, Response } from "express";
import { Order } from "../../models/Order.model";

export async function createOrder(req: Request, res: Response) {
	try {
		const { ...data } = req.body

		const order = await Order.create({ ...data });

		res.status(201).json(order);
	}
	catch(error) {
		console.error(error);
		res.sendStatus(500);
	}
}
