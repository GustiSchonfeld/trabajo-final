import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import presencialImg from './images/presencial.png'; // Asegúrate de tener estas imágenes en tu carpeta
import semipresencialImg from './images/semipresencial.png';
import virtualImg from './images/virtual.png';

function Training() {
    return (
        <div className="capacitaciones-container">
          <Header />
          <h2>TIPOS DE CAPACITACIONES</h2>
          <div className="capacitacion-option">
            <img src={presencialImg} alt="Presencial" className="capacitacion-img" />
            <div className="capacitacion-text">PRESENCIAL</div>
          </div>
          <div className="capacitacion-option">
            <img src={semipresencialImg} alt="Semipresencial" className="capacitacion-img" />
            <div className="capacitacion-text">SEMIPRESENCIAL</div>
          </div>
          <div className="capacitacion-option">
            <img src={virtualImg} alt="Virtual" className="capacitacion-img" />
            <div className="capacitacion-text">VIRTUAL</div>
          </div>
          <Footer />
        </div>
      );
    }

export default Training;
