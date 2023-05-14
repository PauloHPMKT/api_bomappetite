import path from 'node:path';
import { Router } from "express";
import multer from 'multer';

import { createProduct } from "../useCases/producties/createProduct";
import { listProducts } from "../useCases/producties/listProducts";
import { listProductsByCategories } from '../useCases/categories/listProductsByCategories';

const router = Router();

// middleware enabling api to receive upload
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback) {
			//salvando imagem com o nome e timestamp
			callback(null, `${Date.now()}-${file.originalname}`);
		}
	})
});

//list products
router.get('/products', listProducts);

//create product
router.post('/products', upload.single('image'), createProduct);

//get products by category
router.get('/categories/:id/products', listProductsByCategories);


export default router;
