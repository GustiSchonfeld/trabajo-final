import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logoSJM from './images/logoSJM.svg'; // Importa la imagen directamente
import Header from './components/Header';
import Footer from './components/Footer';


function Education() {
  return (
    <div className="container">
    <Header />

      <div className="buttons-container">
        <button className="option-btn">Acceso al Sistema Educativo</button>
        <button className="option-btn">Registro y Documentación</button>
        <button className="option-btn">Programas de Apoyo</button>
        <button className="option-btn">Educación de Adultos</button>
        <button className="option-btn">Educación Superior</button>
        <button className="option-btn">Información Adicional</button>
      </div>

    <Footer />
    </div>
  );
}

export default Education;