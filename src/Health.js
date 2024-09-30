import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logoSJM from './images/logoSJM.svg'; // Importa la imagen directamente


function Health() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <img src={logoSJM} alt="Logo" className="logo" />
        </Link>
        <h1>integrAR</h1>
        <button className="menu-btn">
          <span className="menu-icon">&#9776;</span>
        </button>
      </header>

      <div className="buttons-container">
        <button className="option-btn">Acceso al Sistema de Salud Público</button>
        <button className="option-btn">Cobertura de Salud</button>
        <button className="option-btn">Centros de Atención 24hs</button>
        <button className="option-btn">¿Cómo sacar una obra social?</button>
        <button className="option-btn">Atención Médica para Niños</button>
        <button className="option-btn">Emergencias Médicas</button>
      </div>

      <footer className="footer">
        <p>1128478764</p>
        <p>contacto@sjmargentina.org</p>
      </footer>
    </div>
  );
}

export default Health;