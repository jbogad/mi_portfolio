import React from 'react';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Habilidades from './components/Habilidades';

function App() {
  return (
    <>
      <Header />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </>
  );
}

export default App;
