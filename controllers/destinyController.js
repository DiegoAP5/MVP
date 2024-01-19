const Destino = require('../models/destinyModel');

exports.listarDestinos = async (req, res) => {
    try {
        const destinos = await Destino.find({});
        res.send(destinos);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.añadirDestino = async (req, res) => {
    try {
        const nuevoDestino = new Destino(req.body);
        await nuevoDestino.save();
        res.status(201).send(nuevoDestino);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.destinosPopulares = async (req, res) => {
    // La lógica aquí dependerá de cómo definas un "destino popular"
    // Podría basarse en el número de tickets vendidos para ese destino, por ejemplo
};
