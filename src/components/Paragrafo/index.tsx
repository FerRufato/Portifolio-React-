import React from 'react';
import styled from 'styled-components';

// Definindo StyledTitle
const StyledTitle = styled.h1<{ fontSize: string }>`
    font-size: ${(props) => props.fontSize};
    // outras estilizações aqui
`;

interface Props {
    children: React.ReactNode;
    fontSize?: string; // Tornar opcional
}

const Title = (props: Props) => (
    <StyledTitle fontSize={props.fontSize || '16px'}>
        {props.children}
    </StyledTitle>
);

Title.defaultProps = {
    fontSize: '16px', // Valor padrão
};

export default Title;
