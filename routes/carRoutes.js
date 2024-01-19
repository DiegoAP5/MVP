const express = require('express');
const router = express.Router();
const vehiculosController = require('../controllers/carController');

// Ver la capacidad actual de un vehículo específico
router.get('/:vehiculoId/capacidad', vehiculosController.verCapacidad);

// Actualizar la capacidad de un vehículo específico
router.post('/:vehiculoId/capacidad', vehiculosController.actualizarCapacidad);

module.exports = router;
