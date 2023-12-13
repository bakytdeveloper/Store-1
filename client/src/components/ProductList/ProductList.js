// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from './../ProductCard/ProductCard';
// import './ProductList.css';
//
// function ProductList() {
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         // Запрос к API для получения списка товаров
//         axios.get('/api/products')
//             .then(response => setProducts(response.data))
//             .catch(error => console.error('Error fetching products', error));
//     }, []);
//
//     return (
//         <div className="product-list">
//             {products.map(product => (
//                 <ProductCard key={product._id} product={product} />
//             ))}
//         </div>
//     );
// }
//
// export default ProductList;


// ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Запрос к API для получения списка товаров
                const response = await axios.get('http://localhost:5500/api/products');
                setProducts(response.data);
            } catch (error) {
                setError('Error fetching products');
                console.error('Error fetching products', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
