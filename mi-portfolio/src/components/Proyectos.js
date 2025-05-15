import React from 'react';
import './Proyectos.css';

const proyectos = [
  {
    title: "Push Swap",
    description: "Proyecto de ordenamiento de números usando stacks. Realizado en C.",
    url: "https://github.com/jbogad/push_swap",
  },
  {
    title: "Certificación eJPTv2",
    description: "Certificación de Junior Penetration Tester por INE y OffSec. Aprende más sobre mi formación.",
    url: "https://ine.com/certifications/ejpt-certification/", // Puedes cambiar esta URL si tienes un link personalizado al certificado
  },
];

export default function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-lista">
        {proyectos.map(({ title, description, url }) => (
          <a 
            key={title} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="proyecto-card"
          >
            <h3>{title}</h3>
            <p>{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
