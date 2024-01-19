const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    ordenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orden',
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    metodo: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
        enum: ['pendiente', 'completado', 'cancelado'] // Ejemplo de estados
    },
    // Agrega más campos según sea necesario
});

const Pago = mongoose.model('Pago', pagoSchema);

module.exports = Pago;
