import { Router } from "express";

import { createProduct } from "../controllers/producties/createProduct";
import { listProducts } from "../controllers/producties/listProducts";
import { listProductsByCategories } from '../controllers/categories/listProductsByCategories';

import { upload } from '../middlewares/upload-middleware';

const router = Router();

//list products
router.get('/products', listProducts);

//create product
router.post('/products', upload.single('image'), createProduct);

//get products by category
router.get('/categories/:id/products', listProductsByCategories);

export default router;
