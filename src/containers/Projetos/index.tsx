// src/containers/Projetos/index.tsx
import React from 'react';
import Title from '../../components/Title'; // ajuste o caminho conforme necessário
import Projeto from '../../components/Projeto';

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Title fontSize="16px">Projetos</Title> {/* Usa children para passar o texto */}
    <Lista>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
    </Lista>
  </section>
);

export default Projetos;
