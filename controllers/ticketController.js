const Ticket = require('../models/ticketModel');

exports.reservarTicket = async (req, res) => {
    try {
        const nuevoTicket = new Ticket({
            usuario: req.body.usuario,
            vehiculoId: req.body.vehiculoId,
            destino: req.body.destino,
            fecha: req.body.fecha,
            precio: req.body.precio
        });
        await nuevoTicket.save();
        res.status(201).send(nuevoTicket);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.obtenerTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.ticketId);
        if (!ticket) {
            return res.status(404).send();
        }
        res.send(ticket);
    } catch (error) {
        res.status(500).send(error);
    }
};
