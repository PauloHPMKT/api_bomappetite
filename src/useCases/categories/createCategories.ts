import { Request, Response } from "express";
import { Category } from "../../models/Category.model";

export async function createCategories(req: Request, res: Response) {
	const { ...data } = req.body

	const category = await Category.create({ ...data });

	res.json(category);
}
