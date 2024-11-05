// src/App.tsx
import { ThemeProvider } from 'styled-components'

import React from 'react';
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/sidebar';
import Sobre from './containers/sidebar/Sobre';
import Projetos from './containers/Projetos';
//import temaLight from './themes/light';
import temaDark from './themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={temaDark}>
      <EstiloGlobal/>
      <Container>
      <Sidebar />
      <main>
        <Sobre/>
        <Projetos/>
      </main>
      </Container>

    </ThemeProvider>
  );
};

export default App;






