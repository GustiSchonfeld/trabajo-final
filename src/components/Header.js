import logoSJM from '../images/logoSJM.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaBook, FaHeartbeat, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';

function Header() {
  // Estado para controlar si el menú está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Contenedor para el logo y el texto integrAR */}
      <div className="logo-text-container">
        <Link to="/" className="logo-text-link">
          <img src={logoSJM} alt="Logo" className="logo" />
          <h1>integrAR</h1>
        </Link>
      </div>

            {/* Contenedor para el botón de menú */}
            <div className="menu-container">
        <button className="menu-btn" onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span>
        </button>
      </div>

      {/* Menú desplegable que ocupa toda la pantalla */}
      {menuOpen && (
        <div className="menu-overlay">
          <button className="close-btn" onClick={toggleMenu}>&times;</button>
          <div className="menu-content">
            {/* Botones de Iniciar Sesión y Registrarse */}
            <div className="menu-header-buttons">
              <button className="menu-header-btn">Iniciar Sesión</button>
              <button className="menu-header-btn">Registrarse</button>
            </div>
            <Link to="/documents" className="menu-option" onClick={toggleMenu}>
              <FaUser size={20} /> Trámites y Documentos
            </Link>
            <Link to="/health" className="menu-option" onClick={toggleMenu}>
              <FaHeartbeat size={20} /> Salud
            </Link>
            <Link to="/education" className="menu-option" onClick={toggleMenu}>
              <FaBook size={20} /> Educación
            </Link>
            <Link to="/jobs" className="menu-option" onClick={toggleMenu}>
              <FaBriefcase size={20} /> Busco Trabajo
            </Link>
            <Link to="/assistance" className="menu-option" onClick={toggleMenu}>
              <FaHandsHelping size={20} /> Asistencia
            </Link>
            <Link to="/training" className="menu-option" onClick={toggleMenu}>
              <FaGraduationCap size={20} /> Capacitaciones
            </Link>
            

          </div>
        </div>
      )}
    </header>
  );
}

export default Header;