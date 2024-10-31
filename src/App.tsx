// src/App.tsx
import React from 'react';
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/sidebar';
import Sobre from './containers/sidebar/Sobre';
import Projetos from './containers/Projetos';

const App: React.FC = () => {
  return (
    <>
      <EstiloGlobal/>
      <Container>
      <Sidebar />
      <main>
        <Sobre/>
        <Projetos/>
      </main>
      </Container>

    </>
  );
};

export default App;






