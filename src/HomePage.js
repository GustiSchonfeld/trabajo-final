import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaBook, FaHeartbeat, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header  from './components/Header';
import Footer from './components/Footer';

function HomePage() {
  // Estado para controlar si el menú está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="container">
      <Header />
      <div className="grid-container">
        <div className="grid-item">
          {/* Link para ir a la página de Documents */}
          <Link to="/documents">
            <FaUser size={50} />
            <p>Trámites y Documentos</p>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/health">
            <FaHeartbeat size={50} />
            <p>Salud</p>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/education">
            <FaBook size={50} />
            <p>Educación</p>
          </Link>
        </div>
        <div className="grid-item">
          <FaBriefcase size={50} />
          <p>Busco Trabajo</p>
        </div>
        <div className="grid-item">
          <Link to="/assistance">
          <FaHandsHelping size={50} />
          <p>Asistencia</p>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/training">
          <FaGraduationCap size={50} />
          <p>Capacitaciones</p>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
