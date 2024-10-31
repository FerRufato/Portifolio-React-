import styled from "styled-components";

// Exportando o tipo Props
export interface Props {
    fontSize?: string;
}

// Definindo o Styled Component
export const StyledTitle = styled.h1<Props>`
    color:$ #282A35;
    font-size: ${(props) => props.fontSize || '16px'};
    line-height: 22px;
`;
