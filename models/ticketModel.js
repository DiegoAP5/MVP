const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    usuario: String,
    vehiculoId: String,
    destino: String,
    fecha: Date,
    precio: Number
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
