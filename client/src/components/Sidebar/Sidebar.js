import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

function Sidebar({ onTypeSelect }) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        // Получаем все типы товаров
        axios.get('/api/types')
            .then(response => setTypes(response.data))
            .catch(error => console.error('Error fetching types', error));
    }, []);

    const handleTypeSelect = (selectedType) => {
        onTypeSelect(selectedType); // Передаем выбранный тип наверх для фильтрации
    };

    return (
        <div className="sidebar">
            <h3>Types</h3>
            <ul>
                {types.map((type, index) => (
                    <li key={index} onClick={() => handleTypeSelect(type)}>
                        {type}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
