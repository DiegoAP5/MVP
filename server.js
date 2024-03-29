const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const ticketsRoutes = require('./routes/ticketRoutes');
const vehiculosRoutes = require('./routes/carRoutes');
const destinosRoutes = require('./routes/destinyRoutes');
const pagosRoutes = require('./routes/payRoutes');
const ordenesRoutes = require('./routes/orderRoutes');

const connectDB = require('./config/db');

connectDB();

app.use(express.json());


app.use('/tickets', ticketsRoutes);
app.use('/vehiculos', vehiculosRoutes);
app.use('/destinos', destinosRoutes);
app.use('/pagos', pagosRoutes);
app.use('/ordenes', ordenesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
