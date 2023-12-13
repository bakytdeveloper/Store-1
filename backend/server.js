// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
//
// const app = express();
// const PORT = process.env.PORT || 5500;
// // Разрешить все CORS запросы
// app.use(cors());
//
// // Подключение к MongoDB (замени <YOUR_MONGODB_URI> на фактическую строку подключения)
// mongoose.connect('mongodb+srv://bakytdeveloper:store_1@store-1.qpcp5kg.mongodb.net/store-1?retryWrites=true&w=majority')
//     .then(() => console.log('ПОДКЛЮЧЕННА БАЗА ДАННЫХ MongoDB!!!'))
//     .catch(err => console.error('Error connecting to MongoDB', err));
//
// // Используем body-parser для обработки JSON в теле запросов
// app.use(bodyParser.json());
//
// // Роуты API (создай и подключи файл api.js)
// const apiRoutes = require('./routes/api');
// app.use('/', apiRoutes);
//
// app.listen(PORT, () => {
//     console.log(`СЕРВЕР РАБОТАЕТ НА ${PORT} ПОРТУ!!!`);
// });





// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5500;

async function startServer() {
    try {
        // Подключение к MongoDB
        await mongoose.connect('mongodb+srv://bakytdeveloper:store_1@store-1.qpcp5kg.mongodb.net/store-1?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('ПОДКЛЮЧЕННА БАЗА ДАННЫХ MongoDB!!!');

        // Middleware
        app.use(cors());
        app.use(bodyParser.json());

        // Используй маршруты для API
        app.use('/api', apiRoutes);

        app.listen(PORT, () => {
            console.log(`СЕРВЕР РАБОТАЕТ НА ${PORT} ПОРТУ!!!`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

startServer();