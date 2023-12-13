import React from "react";



import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="app">
     <Header />
     <div className="main-content">
       <Sidebar />
       <ProductList />
     </div>
    </div>
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







