const express = require('express');
const router = express.Router();
const ordenesController = require('../controllers/ordersController');

// Crear una nueva orden
router.post('/', ordenesController.crearOrden);

// Ver detalles de una orden específica
router.get('/:ordenId', ordenesController.verOrden);

module.exports = router;
