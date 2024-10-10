import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function LoginPage() {
  return (
    <div className="login-container">
       <Header /> 
      <h2>Bienvenido nuevamente!</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Dirección de Correo Electrónico:</label>
          <input type="email" id="email" className="form-input" placeholder="Ingrese su email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" className="form-input" placeholder="Ingrese su contraseña" />
        </div>
        <button type="submit" className="login-btn">Iniciar Sesión</button>
      </form>
      <div className="login-links">
        <p>No recuerdo mi contraseña</p>
        <button className="forgot-password-btn">Recuperar contraseña</button>
        <p>¿No tienes cuenta?</p>
        <button className="register-btn">Registrarme</button>
      </div>
      <button className="sjm-btn">Soy del SJM</button>
      <Footer />
    </div>
  );
}

export default LoginPage;
