const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://213475:8TZbqGrOTBVmG2Gn@cluster0.ts6azja.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Base de datos conectada');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;