const express = require('express');
const router = express.Router();
const ordenesController = require('../controllers/ordersController');

router.post('/', ordenesController.crearOrden);

router.get('/:ordenId', ordenesController.verOrden);

module.exports = router;
