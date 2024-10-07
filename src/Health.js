import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logoSJM from './images/logoSJM.svg'; // Importa la imagen directamente
import Header from './components/Header';
import Footer from './components/Footer';


function Health() {
  return (
    <div className="container">
      <Header />

      <div className="buttons-container">
        <button className="option-btn">Acceso al Sistema de Salud Público</button>
        <button className="option-btn">Cobertura de Salud</button>
        <button className="option-btn">Centros de Atención 24hs</button>
        <button className="option-btn">¿Cómo sacar una obra social?</button>
        <button className="option-btn">Atención Médica para Niños</button>
        <button className="option-btn">Emergencias Médicas</button>
      </div>

      <Footer />
    </div>
  );
}

export default Health;