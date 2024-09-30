import React from 'react';
import { FaUser, FaBriefcase, FaBook, FaHeartbeat, FaGraduationCap, FaHandsHelping, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
            <img src="src/images/logoSJM.svg" alt="Logo" className="logo" />
        </Link>
        <h1>integrAR</h1>
        <button className="menu-btn">
          <span className="menu-icon">&#9776;</span>
        </button>
      </header>

      <div className="grid-container">
        <div className="grid-item">
          {/* Link para ir a la página de Documents */}
          <Link to="/documents">
            <FaUser size={50} />
            <p>Trámites y Documentos</p>
          </Link>
        </div>
        <div className="grid-item">
          <FaHeartbeat size={50} />
          <p>Salud</p>
        </div>
        <div className="grid-item">
          <FaBook size={50} />
          <p>Educación</p>
        </div>
        <div className="grid-item">
          <FaBriefcase size={50} />
          <p>Busco Trabajo</p>
        </div>
        <div className="grid-item">
          <FaHandsHelping size={50} />
          <p>Asistencia</p>
        </div>
        <div className="grid-item">
          <FaGraduationCap size={50} />
          <p>Capacitaciones</p>
        </div>
      </div>

      <footer className="footer">
        <p><FaPhoneAlt /> 1128478764</p>
        <p><FaEnvelope /> contacto@sjmargentina.org</p>
        <BsWhatsapp size={30} className="whatsapp-icon" />
      </footer>
    </div>
  );
}

export default HomePage;
