const Orden = require('../models/orderModel');

exports.crearOrden = async (req, res) => {
    try {
        const nuevaOrden = new Orden({
            usuario: req.body.usuario,
            tickets: req.body.tickets,
            total: req.body.total,
            estado: 'pendiente'
        });
        await nuevaOrden.save();
        res.status(201).send(nuevaOrden);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.verOrden = async (req, res) => {
    try {
        const orden = await Orden.findById(req.params.ordenId);
        if (!orden) {
            return res.status(404).send();
        }
        res.send(orden);
    } catch (error) {
        res.status(500).send(error);
    }
};
