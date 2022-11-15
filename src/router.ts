import { Router } from "express";
import { createCategories } from "./useCases/categories/createCategories";
import { listCategories } from "./useCases/categories/listCategories";

export const router = Router();

//list category
router.get('/categories', listCategories);

//create category
router.post('/categories', createCategories);

//list products
router.get('/products', (req, res) => {
	res.send('ok')
});

//create product
router.post('/products', (req, res) => {
	res.send('ok')
});

//get products by category
router.get('/categories/:id', (req, res) => {
	res.send('ok')
});

//list orders
router.get('/orders', (req, res) => {
	res.send('ok')
});

//create order
router.post('/orders', (req, res) => {
	res.send('ok')
});

//change order status
router.patch('/orders/:id', (req, res) => {
	res.send('ok')
});

//delete / cancel order
router.delete('/orders/:id', (req, res) => {
	res.send('ok')
});
