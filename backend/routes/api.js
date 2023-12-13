const express = require('express');
const router = express.Router();

// Добавь и подключи контроллеры (создай и подключи файл productController.js)
const productController = require('../controllers/productController');

// Маршруты для товаров
router.get('/products', productController.getAllProducts);
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
