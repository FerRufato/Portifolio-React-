import styled from "styled-components";

// Exportando o tipo Props
export interface Props {
    fontSize?: string;
}

// Definindo o Styled Component
export const P = styled.p<Props>`
    font-size: 14px;
    font-weight: bold;
    margin-botton: 16px
`;
