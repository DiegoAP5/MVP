const Pago = require('../models/payModel');

exports.procesarPago = async (req, res) => {
    try {
        const nuevoPago = new Pago({
            usuario: req.body.usuario,
            ordenId: req.body.ordenId,
            monto: req.body.monto,
            metodo: req.body.metodo,
            estado: 'procesado'
        });
        await nuevoPago.save();
        res.status(201).send(nuevoPago);
    } catch (error) {
        res.status(500).send(error);
    }
};
