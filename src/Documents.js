import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function Documents() {
  return (
    <div className="container">
      <Header />
      <div className="buttons-container">
        <button className="option-btn">Puntos de Atencion</button>
        <button className="option-btn">Residencia Temporaria o Permanente</button>
        <button className="option-btn">Certificado de Residencia Precaria</button>
        <button className="option-btn">Documento Nacional de Identidad (DNI)</button>
        <button className="option-btn">Trámite de CUIL o CUIT</button>
        <button className="option-btn">Convalidación de Títulos y Estudios</button>
      </div>

      <Footer />

    </div>
  );
}

export default Documents;
