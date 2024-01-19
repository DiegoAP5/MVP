const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'tu-secreto-super-secreto');
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Su token es inválido o expiró');
    }
};

module.exports = verificarToken;
