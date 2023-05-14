import { Request, Response } from "express";
import { Order } from "../../models/Order.model";

export async function listOrders(req: Request, res: Response) {
	try {
		const order = await Order.find().populate('products.product').sort({ createdAt: -1 })

		res.json(order);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}
