import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="left-section">
                <h1>Store№1</h1>
            </div>
            <div className="social-icons">
                <FontAwesomeIcon icon={faInstagram} className="icon" onClick={() => window.open('https://www.instagram.com/')} />
                <FontAwesomeIcon icon={faWhatsapp} className="icon" onClick={() => window.open('https://web.whatsapp.com/')} />
                <FontAwesomeIcon icon={faTiktok} className="icon" onClick={() => window.open('https://www.tiktok.com/')} />
                <FontAwesomeIcon icon={faTelegram} className="icon" onClick={() => window.open('https://web.telegram.org/')} />
            </div>
            <div className="phone-number">XXX-XX-XX-XX</div>
            {/*<div className="more-icons">*/}
            {/*    <FontAwesomeIcon icon={faTiktok} className="icon" onClick={() => window.open('https://www.tiktok.com/')} />*/}
            {/*    <FontAwesomeIcon icon={faTelegram} className="icon" onClick={() => window.open('https://web.telegram.org/')} />*/}
            {/*</div>*/}
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
        </div>
    );
}

export default Header;
