import React, {useState} from 'react';
import './ProductCard.css';
import Modal from "../Modal/Modal";

function ProductCard({ product, onClick }) {
    const { name, description, price, images } = product;

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="product-card" onClick={() => onClick(product)}>
            {images && images.length > 0 && (
                <img src={images[0].url} alt={images[0].alt} className="product-image" />
            )}
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                {/*<p className="product-description">{description}</p>*/}
                <p className="product-description">{description.slice(0, 70)}</p>
                <p className="product-price">KGS {price.toFixed(2)}</p>
            </div>
            <Modal product={product} onClose={closeModal} />
        </div>
    );
}

export default ProductCard;
