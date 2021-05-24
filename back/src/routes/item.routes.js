const Router = require('express');

const router = new Router();
const itemController = require('../controller/item.controller'); //

router.post('/item', itemController.createItem);
router.get('/item', itemController.getItems);
router.get('/item/:id', itemController.getOneItem);
router.delete('/item/:id', itemController.deleteItem);

module.exports = router;