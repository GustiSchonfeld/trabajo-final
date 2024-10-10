import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function RegisterPage() {
  return (
    <div className="login-container">
      <Header />
      <h2>¡Hola, bienvenido!</h2>
      <p>
        Te pedimos por favor completes el siguiente formulario. Esto es un registro provisorio
        para desarrollar con mayor facilidad cualquier ayuda que te podamos prestar. Esta 
        información es absolutamente confidencial.
      </p>
      <form className="login-form">
        <div className="form-group">
          <label>Apellido/s:</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Nombre/s:</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Ubicación (Provincia o Ciudad):</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Dirección de correo electrónico:</label>
          <input type="email" className="form-input" />
        </div>
        <button type="submit" className="login-btn">Registrarse</button>
      </form>
      <Footer />
    </div>
  );
}

export default RegisterPage;
