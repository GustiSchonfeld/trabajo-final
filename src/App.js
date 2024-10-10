import React from 'react';
import './App.css';
import { FaUser, FaBriefcase, FaBook, FaHeartbeat, FaGraduationCap, FaHandsHelping, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Documents from './Documents';
import HomePage from './HomePage'; // Crea un componente separado para el contenido principal (Página de Inicio)
import Health from './Health';
import Education from './Education';
import Assistance from './Assistance';
import Training from './Training';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

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

        {/* Ruta para la página de educación */}
        <Route path="/education" element={<Education />} />

        {/* Ruta para la página de asistencia */}
        <Route path="/assistance" element={<Assistance />} />

        {/* Ruta para la página de capacitaciones */}
        <Route path="/training" element={<Training />} />

        {/* Ruta para la página de login */}
        <Route path="/loginpage" element={<LoginPage />} />

        {/* Ruta para la página de registro */}
        <Route path="/registerpage" element={<RegisterPage />} />

      </Routes>
    </Router>
  );
}

export default App;
