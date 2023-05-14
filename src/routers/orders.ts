import { Router } from "express";

const router = Router();

//list orders
router.get('/orders')//, listOrders);

//create order
router.post('/orders')//, createOrder);

//change order status
router.patch('/orders/:id')//, changeOrderStatus);

//delete / cancel order
router.delete('/orders/:id')//, cancelOrder);

export default router;

