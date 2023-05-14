import express from "express";

const app = express()

//import routers
import categories from './categories';
import orders from './orders';
import products from './products';
import employees from './employees';

app.use(categories)
app.use(orders)
app.use(products)
app.use(employees)

export default app;
