import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logoSJM from './images/logoSJM.svg'; // Importa la imagen directamente


function Documents() {
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
        <button className="option-btn">Puntos de Atencion</button>
        <button className="option-btn">Residencia Temporaria o Permanente</button>
        <button className="option-btn">Certificado de Residencia Precaria</button>
        <button className="option-btn">Documento Nacional de Identidad (DNI)</button>
        <button className="option-btn">Trámite de CUIL o CUIT</button>
        <button className="option-btn">Convalidación de Títulos y Estudios</button>
      </div>

      <footer className="footer">
        <p>1128478764</p>
        <p>contacto@sjmargentina.org</p>
      </footer>
    </div>
  );
}

export default Documents;
