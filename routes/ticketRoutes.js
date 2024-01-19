const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/ticketController');

router.post('/reservar', ticketsController.reservarTicket);
router.get('/:ticketId', ticketsController.obtenerTicket);

module.exports = router;
