import React from 'react';
import './App.css';
import { FaUser, FaBriefcase, FaBook, FaHeartbeat, FaGraduationCap, FaHandsHelping, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Documents from './Documents';
import HomePage from './HomePage'; // Crea un componente separado para el contenido principal (Página de Inicio)
import Health from './Health';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal (home) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Ruta para la página de documentos */}
        <Route path="/documents" element={<Documents />} />

        {/* Ruta para la página de salud */}
        <Route path="/health" element={<Health />} />
      </Routes>
    </Router>
  );
}

export default App;
