import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.tertiary};

  margin-bottom: 2rem;
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 100%;

  padding: 0.5rem;

  margin: 0 auto;
`;

export const LogoStyled = styled.img`
  width: 60px;
  height: 60px;
`;
