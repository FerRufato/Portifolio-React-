import React from 'react';
import styled from 'styled-components';

// Definindo um componente styled
const StyledTitle = styled.h1<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  // outras estilizações aqui
`;

// Definindo as propriedades esperadas
interface Props {
  fontSize: string; // fontSize é obrigatório
  children: React.ReactNode; // children é obrigatório e pode ser qualquer conteúdo React
}

// Componente Title
const Title: React.FC<Props> = ({ fontSize, children }) => (
  <StyledTitle fontSize={fontSize}>{children}</StyledTitle>
);

export default Title;
