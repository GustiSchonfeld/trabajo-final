import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logoSJM from './images/logoSJM.svg'; // Importa la imagen directamente
import Header from './components/Header';

function Attendance() {
  return (
    <div className="container">
      <Header />

      <footer className="footer">
        <p>1128478764</p>
        <p>contacto@sjmargentina.org</p>
      </footer>
    </div>
  );
}

export default Attendance;