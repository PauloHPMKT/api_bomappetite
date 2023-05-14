import { Router } from "express";

const router = Router();

// list employees
router.get('/employees')//, listCategories);

// create employee
router.post("/employees")

// update employee
router.patch("/employees")

// delete employee
router.delete("/employees")

export default router;
