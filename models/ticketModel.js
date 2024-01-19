const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    vehiculoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehiculo',
        required: true
    },
    destino: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destino',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
