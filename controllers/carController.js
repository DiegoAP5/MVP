const Vehiculo = require('../models/carModel');

exports.verCapacidad = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findById(req.params.vehiculoId);
        if (!vehiculo) {
            return res.status(404).send();
        }
        res.send({ capacidad: vehiculo.capacidad });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.actualizarCapacidad = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.vehiculoId, { capacidad: req.body.capacidad }, { new: true });
        if (!vehiculo) {
            return res.status(404).send();
        }
        res.send(vehiculo);
    } catch (error) {
        res.status(500).send(error);
    }
};
