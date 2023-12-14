import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiSearch } from 'react-icons/fi';

import { faInstagram, faWhatsapp, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

function Header({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };
    const handleTitleClick = () => {
        // Очищаем поле поиска и перезагружаем страницу при клике на заголовок
        setSearchTerm('');
        history.push('/');
        window.location.reload(); // Это перезагрузит страницу
    };

    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="site-name" onClick={handleTitleClick}>
                <h1 className="site-name"> Store<span>№1</span></h1>
                </Link>

            </div>
            <div className="social-icons">
                <FontAwesomeIcon icon={faInstagram} className="icon" onClick={() => window.open('https://www.instagram.com/')} />
                <FontAwesomeIcon icon={faWhatsapp} className="icon" onClick={() => window.open('https://web.whatsapp.com/')} />
                <FontAwesomeIcon icon={faTiktok} className="icon" onClick={() => window.open('https://www.tiktok.com/')} />
                <FontAwesomeIcon icon={faTelegram} className="icon" onClick={() => window.open('https://web.telegram.org/')} />
            </div>
            <a className="phone-number" href="tel:+996312517582">XXX-XX-XX-XX</a>
            {/*<div className="more-icons">*/}
            {/*    <FontAwesomeIcon icon={faTiktok} className="icon" onClick={() => window.open('https://www.tiktok.com/')} />*/}
            {/*    <FontAwesomeIcon icon={faTelegram} className="icon" onClick={() => window.open('https://web.telegram.org/')} />*/}
            {/*</div>*/}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Поиск..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <FiSearch className="search-icon" />
            </div>
        </div>
    );
}

export default Header;
