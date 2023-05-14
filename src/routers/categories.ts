import { Router } from "express";

const router = Router();

//list categories
router.get('/categories')//, listCategories);

//create category
router.post('/category')//, createCategories);

//update category
router.patch('/category')

//remove category
router.delete('/category')

export default router;
