const express = require('express');

const cors = require('cors');

const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');
const supplierRouter = require('./routes/supplier.routes');
const orderRouter = require('./routes/deliveryOrder.routes');
const itemRouter = require('./routes/item.routes');



const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());// Use this after the variable declaration
app.use(express.json());
app.use('/', userRouter);
app.use('/', productRouter);
app.use('/', supplierRouter);
app.use('/', orderRouter);
app.use('/', itemRouter);

app.listen(PORT, () => console.log(`server started on post ${PORT}`));