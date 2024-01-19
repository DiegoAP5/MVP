const mongoose = require('mongoose');

const destinoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    // Agrega más campos según sea necesario
});

const Destino = mongoose.model('Destino', destinoSchema);

module.exports = Destino;
