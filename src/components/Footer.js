import React from 'react'
import {  FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
        <p><FaPhoneAlt /> 1128478764</p>
        <p><FaEnvelope /> contacto@sjmargentina.org</p>
        <BsWhatsapp size={30} className="whatsapp-icon" />
    </div>
  )
}

export default Footer