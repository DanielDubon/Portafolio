import React from 'react';
import './Header.css';
import MyImage from '../assets/myimage.jpg';

const Header = () => {
    return (
        <header className="header">
            <img src={MyImage} alt="User" className="header-user-image" />
            <h1 className="header-title">Portafolio Daniel Dubon</h1>
            <nav className="header-nav">
                <a href="#about" className="header-link">Sobre Mí</a>
                <a href="#projects" className="header-link">Proyectos</a>
                <a href="#contact" className="header-link">Contacto</a>
            </nav>
        </header>
    );
};

export default Header;
