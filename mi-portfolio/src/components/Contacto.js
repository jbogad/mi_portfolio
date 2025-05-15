import React from 'react';
import './Contacto.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <h2>Contacto</h2>
      <p>¿Quieres ponerte en contacto conmigo? ¡Aquí me tienes!</p>
      <div className="contacto-icons">
        <a href="mailto:javierboga@example.com" aria-label="Email">
          <FaEnvelope size={30} />
        </a>
        <a href="https://linkedin.com/in/javierboga" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/jbogad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
}
