const Product = require('../models/Product');

// Контроллеры для управления товарами

// Получить все товары
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Добавить новый товар
const addProduct = async (req, res) => {
    const {
        name,
        description,
        type,
        price,
        images,
        specifications,
    } = req.body;

    try {
        const newProduct = new Product({
            name,
            description,
            type,
            price,
            images,
            specifications,
        });

        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Обновить товар по ID
const updateProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).send('Product not found');
        }

        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Удалить товар по ID
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).send('Product not found');
        }

        res.json(deletedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};
