import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function Assistance() {
  return (
    <div className="assistance-container">
      <Header />
      <h2>CONSULTAS RÁPIDAS</h2>
      <div className="consultas-form">
        <label>Motivo de consulta:</label>
        <select>
          <option value="temas">temas</option>
          {/* Añade más opciones aquí */}
        </select>

        <label>Tu ubicación:</label>
        <select>
          <option value="ubicaciones">ubicaciones</option>
          {/* Añade más opciones aquí */}
        </select>

        <label>Tu consulta:</label>
        <select>
          <option value="consultas">consultas</option>
          {/* Añade más opciones aquí */}
        </select>

        <button className="consultar-btn">CONSULTAR</button>
      </div>
      <Footer />
    </div>
  );
}

export default Assistance;
