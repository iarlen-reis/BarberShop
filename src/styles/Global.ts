import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
`;

export const ContainerStyled = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  padding: 0 2rem;

  margin: 0 auto;
`;
