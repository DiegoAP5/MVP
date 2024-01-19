const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/payController');

router.post('/procesar', pagosController.procesarPago);

module.exports = router;
