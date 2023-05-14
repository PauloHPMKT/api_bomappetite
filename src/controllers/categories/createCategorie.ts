import { Request, Response } from "express";
//import { io } from "../..";
import { Category } from "../../models/Category.model";

export async function createCategories(req: Request, res: Response) {
	try {
		const { ...data } = req.body

		const category = await Category.create({ ...data });

		//io.emit('order-new')
		res.status(201).json(category);
	}
	catch(error) {
		console.error(error);
		res.sendStatus(500);
	}
}
