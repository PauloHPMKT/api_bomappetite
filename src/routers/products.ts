import { Router } from "express";

import { createProduct } from "../useCases/producties/createProduct";
import { listProducts } from "../useCases/producties/listProducts";
import { listProductsByCategories } from '../useCases/categories/listProductsByCategories';

import { upload } from '../middlewares/upload-middleware';

const router = Router();

//list products
router.get('/products', listProducts);

//create product
router.post('/products', upload.single('image'), createProduct);

//get products by category
router.get('/categories/:id/products', listProductsByCategories);

export default router;
