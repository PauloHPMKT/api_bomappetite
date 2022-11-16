import path from 'node:path';
import { Router } from "express";
import multer from 'multer';

import { createCategories } from "./useCases/categories/createCategorie";
import { listCategories } from "./useCases/categories/listCategories";
import { createProduct } from "./useCases/producties/createProduct";
import { listProducts } from "./useCases/producties/listProducts";
import { listProductsByCategories } from './useCases/categories/listProductsByCategories';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';

export const router = Router();

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

//list category
router.get('/categories', listCategories);

//create category
router.post('/categories', createCategories);

//list products
router.get('/products', listProducts);

//create product
router.post('/products', upload.single('image'), createProduct);

//get products by category
router.get('/categories/:id/products', listProductsByCategories);

//list orders
router.get('/orders', listOrders);

//create order
router.post('/orders', createOrder);

//change order status
router.patch('/orders/:id', changeOrderStatus);

//delete / cancel order
router.delete('/orders/:id', cancelOrder);
