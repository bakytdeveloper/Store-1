const mongoose = require('mongoose');

// Схема для товаров
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: [
        {
            url: String,
            alt: String,
        },
    ],
    specifications: [
        {
            key: String,
            value: String,
        },
    ],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;