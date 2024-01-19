const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/payController');

// Procesar un pago
router.post('/procesar', pagosController.procesarPago);

module.exports = router;
