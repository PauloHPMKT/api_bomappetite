import { Request, Response } from "express";
import { Product } from "../../models/Product.model";

export async function listProductsByCategories(req: Request, res: Response) {
	try {
		const { id } = req.params; //parametro da rota
		const products = await Product.find().where('category').equals(id);
		res.json(products);

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
