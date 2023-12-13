const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5500;

// Подключение к MongoDB (замени <YOUR_MONGODB_URI> на фактическую строку подключения)
mongoose.connect('<YOUR_MONGODB_URI>')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

// Используем body-parser для обработки JSON в теле запросов
app.use(bodyParser.json());

// Роуты API (создай и подключи файл api.js)
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
