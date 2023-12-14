const express = require('express');
const router = express.Router();

// Добавь и подключи контроллеры (создай и подключи файл productController.js)
const productController = require('./../controllers/productController');
const Product = require("./../models/Product");

// Маршруты для товаров
router.get('/products', productController.getAllProducts);
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);


// Маршрут для получения всех типов товаров
router.get('/products/types', async (req, res) => {
    try {
        const types = await Product.distinct('type');
        res.json([...types]); // Отправляем строку как массив
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
