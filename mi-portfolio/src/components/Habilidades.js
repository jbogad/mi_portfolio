import React from 'react';
import { FaReact, FaJsSquare, FaLinux, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Habilidades.css';

const habilidades = [
  { icon: <FaReact color="#61dafb" />, name: 'React' },
  { icon: <FaJsSquare color="#f0db4f" />, name: 'JavaScript' },
  { icon: <FaLinux color="#FCC624" />, name: 'Linux' },
  { icon: <FaCode color="#007ACC" />, name: 'C Programming' },
];

function Habilidades() {
  return (
    <section id="habilidades" className="habilidades">
      <h2>Habilidades</h2>
      <div className="icon-list">
        {habilidades.map((h, i) => (
          <motion.div
            key={i}
            className="icon-item"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {h.icon}
            <p>{h.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;
