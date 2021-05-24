const Router = require('express');

const router = new Router();
const supplierController = require('../controller/supplier.controller');

router.get('/supplier/:id', supplierController.getOneSupplier);
router.get('/supplier', supplierController.getSupplier);

module.exports = router;
