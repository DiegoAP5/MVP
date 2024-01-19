const express = require('express');
const router = express.Router();
const destinosController = require('../controllers/destinyController');

// Listar todos los destinos
router.get('/', destinosController.listarDestinos);

// Añadir un nuevo destino
router.post('/', destinosController.añadirDestino);

// Obtener destinos populares (puedes necesitar implementar la lógica específica para esto)
router.get('/populares', destinosController.destinosPopulares);

module.exports = router;
