// // Modal.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './Modal.css';
//
// const Modal = ({ isOpen, onClose, product }) => {
//     if (!isOpen) return null;
//
//     return ReactDOM.createPortal(
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <button className="close-button" onClick={onClose}>
//                     &times;
//                 </button>
//                 <h2>{product.name}</h2>
//                 <div className="images">
//                     {/* Место для маленьких изображений */}
//                     {product.images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image}
//                             alt={`Image ${index}`}
//                             className="small-image"
//                         />
//                     ))}
//                     {/* Основное изображение */}
//                     <img src={product.images[0]} alt="Main" className="main-image" />
//                 </div>
//                 <p>{product.description}</p>
//                 <table className="characteristics-table">
//                     <thead>
//                     <tr>
//                         <th>Характеристика</th>
//                         <th>Значение</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {Object.entries(product.specifications).map(([key, value], index) => (
//                         <tr key={index}>
//                             <td>{key}</td>
//                             <td>{value}</td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>,
//         document.getElementById('modal-root')
//     );
// };
//
// export default Modal;





import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>{product.name}</h2>
                <div className="trio">
                <div className="images">
                    <div className="small-images-column">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image.url}
                            alt={`Image ${index}`}
                            className="small-image"
                        />
                    ))}
                    </div>
                    <img src={product.images[0].url} alt="Main" className="main-image" />
                </div>
                <div className="description-column">
                    <p>{product.description}</p>
                </div>

                </div>

                <table className="characteristics-table">
                    <thead>
                    <tr>
                        <th>Характеристика</th>
                        <th>Значение</th>
                    </tr>
                    </thead>
                    {/*<tbody>*/}
                    {/*{Object.entries(product.specifications).map(([key, value], index) => (*/}
                    {/*    <tr key={index}>*/}
                    {/*        <td>{key}</td>*/}
                    {/*        <td>{value.value}</td>*/}
                    {/*    </tr>*/}
                    {/*))}*/}
                    {/*</tbody>*/}
                    <tbody>
                    {product.specifications.map((specification, index) => (
                        <tr key={index}>
                            <td>{specification.key}</td>
                            <td>{specification.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>,

    document.body
    );
};

export default Modal;
