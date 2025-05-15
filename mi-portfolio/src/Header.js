// src/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Javier Boga</div>
      <nav className="header__nav">
        <a href="#sobre-mi" className="header__link">Sobre mí</a>
        <a href="#proyectos" className="header__link">Proyectos</a>
        <a href="#contacto" className="header__link">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
