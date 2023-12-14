
// // ProductList.js
//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from '../ProductCard/ProductCard';
// import './ProductList.css';
//
// function ProductList() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Запрос к API для получения списка товаров
//                 const response = await axios.get('http://localhost:5500/api/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 setError('Error fetching products');
//                 console.error('Error fetching products', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     if (loading) {
//         return <p>Loading...</p>;
//     }
//
//     if (error) {
//         return <p>Error: {error}</p>;
//     }
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
//
//


import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ProductCard from './../ProductCard/ProductCard';
import './ProductList.css';
import Sidebar from "./../Sidebar/Sidebar";

function ProductList({ searchKeyword }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = 'http://localhost:5500/api/products';

                if (selectedType) {
                    url += `?type=${selectedType}`;
                }

                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [selectedType]);


    const handleTypeSelect = (type) => {
        setSelectedType(type);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    // const handleModalClose = () => {
    //     setSelectedProduct(null);
    // };

    const filteredProducts = products
        .filter((product) => !selectedType || product.type === selectedType)
        .filter((product) =>
            searchKeyword
                ? product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                product.description.toLowerCase().includes(searchKeyword.toLowerCase())
                : true
        );

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (

        <div className="product-list">
            <Sidebar onTypeSelect={handleTypeSelect} />
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}
                    onClick={() => handleProductClick(product)}
                />
            ))}
        </div>
    );
}

export default ProductList;





