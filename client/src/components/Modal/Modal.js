// //   Modal.js
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './Modal.css';
//
// const Modal = ({ isOpen, onClose, product }) => {
//
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//
//     if (!isOpen || !product) {
//         return null;
//     };
//
//     const handleImageClick = (index) => {
//         setSelectedImageIndex(index);
//     };
//
//     return ReactDOM.createPortal(
//         <div className="modal-overlay">
//             <div className="modal">
//                 <button className="close-button" onClick={onClose}>
//                     &times;
//                 </button>
//                 <h2>{product.name}</h2>
//                 <div className="trio">
//                 <div className="images">
//                     <div className="small-images-column">
//                     {product.images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image.url}
//                             alt={`Image ${index}`}
//                             className="small-image"
//                         />
//                     ))}
//                     </div>
//                     <img src={product.images[0].url} alt="Main" className="main-image" />
//                 </div>
//                 <div className="description-column">
//                     <p>{product.description}</p>
//                 </div>
//
//                 </div>
//
//                 <table className="characteristics-table">
//                     <thead>
//                     <tr>
//                         <th>Характеристика</th>
//                         <th>Значение</th>
//                     </tr>
//                     </thead>
//                     {/*<tbody>*/}
//                     {/*{Object.entries(product.specifications).map(([key, value], index) => (*/}
//                     {/*    <tr key={index}>*/}
//                     {/*        <td>{key}</td>*/}
//                     {/*        <td>{value.value}</td>*/}
//                     {/*    </tr>*/}
//                     {/*))}*/}
//                     {/*</tbody>*/}
//                     <tbody>
//                     {product.specifications.map((specification, index) => (
//                         <tr key={index}>
//                             <td>{specification.key}</td>
//                             <td>{specification.value}</td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>,
//
//     document.body
//     );
// };
//
// export default Modal;
//   Modal.js

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, product }) => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    if (!isOpen || !product) {
        return null;
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

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
                            className={`small-image ${index === selectedImageIndex ? 'selected' : ''}`}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                    </div>
                    <img src={product.images[selectedImageIndex].url} alt="Main" className="main-image" />
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
