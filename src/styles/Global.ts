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

    body {
        background: ${({ theme }) => theme.colors.primary};
    }

    h1, h2, h3, h4, h5 {
        font-family: ${({ theme }) => theme.font.itim};
    }
`;

export const ContainerStyled = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  padding: 0 2rem;

  margin: 0 auto;
`;
