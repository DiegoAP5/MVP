const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    total: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true,
        enum: ['pendiente', 'completado', 'cancelado'] // Ejemplo de estados
    },
    // Agrega más campos según sea necesario
});

const Orden = mongoose.model('Orden', ordenSchema);

module.exports = Orden;
