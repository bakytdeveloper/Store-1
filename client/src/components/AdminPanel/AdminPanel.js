// AdminPanel.js
import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [imageInput, setImageInput] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [characteristicKey, setCharacteristicKey] = useState('');
    const [characteristicValue, setCharacteristicValue] = useState('');
    const [characteristics, setCharacteristics] = useState([]);

    const handleImageInputChange = (e) => {
        setImageInput(e.target.value);
        setPreviewImage(e.target.value);
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageInput('');
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddCharacteristic = () => {
        if (characteristicKey && characteristicValue) {
            setCharacteristics([...characteristics, { key: characteristicKey, value: characteristicValue }]);
            setCharacteristicKey('');
            setCharacteristicValue('');
        }
    };

    const handleRemoveCharacteristic = (index) => {
        const updatedCharacteristics = [...characteristics];
        updatedCharacteristics.splice(index, 1);
        setCharacteristics(updatedCharacteristics);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();


        // Формируем данные для отправки на сервер
        const formData = {
            name,
            description,
            type,
            price,
            images: [{ url: imageInput, alt: 'Image Alt' }], // Временно, замените на загрузку файла
            specifications: characteristics,
        };

        // Отправляем запрос на сервер
        try {
            const response = await axios.post('http://localhost:5500/api/products', formData);
            console.log('Product added:', response.data);
            // Сбрасываем значения полей после успешной отправки
            setName('');
            setDescription('');
            setType('');
            setPrice('');
            setImageInput('');
            setPreviewImage('');
            setCharacteristics([]);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="admin-panel container mt-5">
            <h2 className="mb-4">Admin Panel</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <input type="text" className="form-control" id="type" value={type} onChange={(e) => setType(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="imageInput" className="form-label">Image Input</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="imageInput" value={imageInput} onChange={handleImageInputChange} placeholder="Enter image URL" />
                        <input type="file" className="form-control" id="fileInput" onChange={handleFileInput} />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Choose File</button>
                    </div>
                    {previewImage && <img src={previewImage} alt="Preview" className="mt-2" />}
                </div>


                <div className="mb-3">
                    <label htmlFor="characteristicKey" className="form-label">Characteristic Key</label>
                    <input type="text" className="form-control" id="characteristicKey" value={characteristicKey} onChange={(e) => setCharacteristicKey(e.target.value)} />
                {/*</div>*/}
                {/*<div className="mb-3">*/}
                    <label htmlFor="characteristicValue" className="form-label">Characteristic Value</label>
                    <input type="text" className="form-control" id="characteristicValue" value={characteristicValue} onChange={(e) => setCharacteristicValue(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary mb-3" onClick={handleAddCharacteristic}>Add Characteristic</button>
                {characteristics.length > 0 && (
                    <div className="mb-3">
                        <h5>Characteristics</h5>
                        <ul className="list-group">
                            {characteristics.map((char, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    {char.key}: {char.value}
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemoveCharacteristic(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button type="submit" className="btn btn-success">Add Product</button>
            </form>
        </div>
    );
};

export default AdminPanel;
