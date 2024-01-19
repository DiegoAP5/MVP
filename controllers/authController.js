const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ email: req.body.email });

        if (usuario && (await bcrypt.compare(req.body.password, usuario.password))) {
            const token = jwt.sign(
                { userId: usuario._id, email: usuario.email },
                'tu-secreto-super-secreto',
                { expiresIn: '1h' }
            );

            res.status(200).json({ token: token });
        } else {
            // Autenticación fallida
            res.status(401).send('Credenciales incorrectas');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
