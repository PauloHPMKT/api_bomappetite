import { Request, Response } from "express";
import { Product } from "../../models/Product.model";

export async function createProduct(req: Request, res: Response) {
	try {
		// multipart format data is the right format that you can use bloob or file data to send images as uploaded
		const imagePath = req.file?.filename;

		const {
			name,
			description,
			pricing,
			ingredient,
			category } = req.body

		const product = await Product.create({
			name,
			description,
			imagePath,
			pricing: Number(pricing),
			ingredient: ingredient ? JSON.parse(ingredient) : [],
			category,
		})

		res.status(201).json(product);
	}
	catch(error) {
		console.error(error);
		res.sendStatus(500);
	}
}
