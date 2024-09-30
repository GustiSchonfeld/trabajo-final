import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logoSJM from './images/logoSJM.svg'; // Importa la imagen directamente


function Education() {
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
        <button className="option-btn">Acceso al Sistema Educativo</button>
        <button className="option-btn">Registro y Documentación</button>
        <button className="option-btn">Programas de Apoyo</button>
        <button className="option-btn">Educación de Adultos</button>
        <button className="option-btn">Educación Superior</button>
        <button className="option-btn">Información Adicional</button>
      </div>

      <footer className="footer">
        <p>1128478764</p>
        <p>contacto@sjmargentina.org</p>
      </footer>
    </div>
  );
}

export default Education;