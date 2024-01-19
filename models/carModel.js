const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    // Agrega más campos según sea necesario
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;
