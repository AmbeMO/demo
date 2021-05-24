const Router = require('express');

const router = new Router();
const orderController = require('../controller/deliveryOrder.controller');

router.post('/order/:id', orderController.createOrder);
router.get('/order/', orderController.getOrders);
router.get('/order/:id', orderController.getOneOrder);

module.exports = router;
