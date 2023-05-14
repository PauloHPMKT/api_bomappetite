import express from "express";

const app = express()

//import routers
import categories from './categories';
import orders from './orders';
import products from './products';

app.use(categories)
app.use(orders)
app.use(products)

export default app;
