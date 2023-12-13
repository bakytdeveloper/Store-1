import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
    const { name, description, price, images, specifications } = product;

    return (
        <div className="product-card">
            {images && images.length > 0 && (
                <img src={images[0].url} alt={images[0].alt} className="product-image" />
            )}
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                {/*<p className="product-description">{description}</p>*/}
                <p className="product-description">{description.slice(0, 70)}</p>
                <p className="product-price">KGS {price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default ProductCard;
