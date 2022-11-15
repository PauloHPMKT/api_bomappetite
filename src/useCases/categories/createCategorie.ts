import { Request, Response } from "express";
import { Category } from "../../models/Category.model";

export async function createCategories(req: Request, res: Response) {
	try {
		const { ...data } = req.body

		const category = await Category.create({ ...data });

		res.status(201).json(category);
	}
	catch(error) {
		console.error(error);
		res.sendStatus(500);
	}
}
