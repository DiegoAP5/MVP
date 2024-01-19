const express = require('express');
const router = express.Router();
const destinosController = require('../controllers/destinyController');

router.get('/', destinosController.listarDestinos);

router.post('/', destinosController.añadirDestino);

router.get('/populares', destinosController.destinosPopulares);

module.exports = router;
