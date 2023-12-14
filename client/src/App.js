// import React, {useState} from "react";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
// import ProductList from "./components/ProductList/ProductList";
// import './App.css';
//
//
//
// function App() {
//     const [selectedType, setSelectedType] = useState(null);
//
//     return (
//         <div>
//             <Header />
//             <div style={{ display: 'flex' }}>
//                 <Sidebar onSelectType={setSelectedType} />
//                 <ProductList selectedType={selectedType} />
//             </div>
//         </div>
//     );
// }
//
//
// export default App;
//
//
//
import React, {useState} from "react";
import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminPanel from "./components/AdminPanel/AdminPanel";



function App() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
    };

    return (
        <Router>
            <Switch>
        <div>
            <Header onSearch={handleSearch} />
            <div style={{ display: 'flex' }}>

                <Route path="/nurlan_admin" exact>
                    <AdminPanel />
                </Route>

                <Route path="/" exact>
                <ProductList selectedType={selectedType} searchKeyword={searchKeyword}  />
                </Route>
            </div>
        </div>
            </Switch>
        </Router>
    );
}


export default App;





// {
//     "name": "Название товара 1",
//     "description": "Описание товара 1",
//     "type": "Тип товара 1",
//     "price": 25.99,
//     "images": [
//     {
//         "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41r9ACk0u7L._AC_SY879_.jpg",
//         "alt": "Изображение 1"
//     },
//     {
//         "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61v4YkqY3AL._AC_SY879_.jpg",
//         "alt": "Изображение 2"
//     },
//     {
//         "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51xgGelFjPL._AC_SY879_.jpg",
//         "alt": "Изображение 2"
//     },
//     {
//         "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CCEv0ojRL._AC_SX679_.jpg",
//         "alt": "Изображение 2"
//     }
// ],
//     "specifications": [
//     {
//         "key": "Цвет",
//         "value": "Красный"
//     },
//     {
//         "key": "Размер",
//         "value": "M"
//     },
//     {
//         "key": "Материал",
//         "value": "Хлопок"
//     }
// ]
// }







