

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Sidebar.css';
//
// function Sidebar({ onSelectType }) {
//     const [types, setTypes] = useState([]);
//
//     useEffect(() => {
//         axios.get('http://localhost:5500/api/products/types')
//             .then(response => {
//                 const uniqueTypes = Array.from(new Set(response.data)); // Получаем уникальные типы
//                 setTypes(uniqueTypes);
//             })
//             .catch(error => {
//                 console.error('Error fetching types', error);
//                 // Обработка ошибок
//             });
//     }, []);
//
//     return (
//         <div className="sidebar">
//             <div className="type" onClick={() => onSelectType('Все товары')}>
//                 Все товары
//             </div>
//             {types.map((type, index) => (
//                 <div key={index} className="type" onClick={() => onSelectType(type)}>
//                     {type}
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default Sidebar;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

function Sidebar({ onTypeSelect }) {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);




    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await fetch('http://localhost:5500/api/products/types');
                const data = await response.json();

                console.log('Received types data:', data);

                if (Array.isArray(data)) {
                    setTypes(data);
                } else {
                    console.error('Invalid data format for types:', data);
                }
            } catch (error) {
                console.error('Error fetching types:', error);
            }
        };

        fetchTypes();
    }, []);

    const handleTypeClick = (type) => {
        setSelectedType(type);
        onTypeSelect(type); // Передаем выбранный тип обратно в родительский компонент
    };

    const handleShowAllClick = () => {
        setSelectedType(null);
        onTypeSelect(null); // Передаем null для отображения всех товаров
    };




    return (
        <aside className={`sidebar ${isSidebarVisible ? 'show-sidebar' : ''}`}>
            <h2>Типы товаров</h2>
            <ul>
                <li className={!selectedType ? 'selected' : undefined} onClick={handleShowAllClick}>
                    Все товары
                </li>
                {types.map((type, index) => (
                    <li
                        key={index}
                        className={selectedType === type ? 'selected' : undefined}
                        onClick={() => handleTypeClick(type)}
                    >
                        {type}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
