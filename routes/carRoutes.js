const express = require('express');
const router = express.Router();
const vehiculosController = require('../controllers/carController');

router.get('/:vehiculoId/capacidad', vehiculosController.verCapacidad);

router.post('/:vehiculoId/capacidad', vehiculosController.actualizarCapacidad);

module.exports = router;
