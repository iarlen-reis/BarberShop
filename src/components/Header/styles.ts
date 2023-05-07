import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.secundary};

  margin-bottom: 2rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  padding: 0.5rem;

  margin: 0 auto;
`;

export const LogoStyled = styled.img`
  width: 60px;
  height: 60px;
`;

export const ButtonLogoutStyled = styled.button`
  max-width: 10rem;
  width: 100%;

  font-family: ${({ theme }) => theme.font.itim};
  font-size: ${({ theme }) => theme.size.small};

  padding: 0.7rem;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.textWhite};
  background: ${({ theme }) => theme.colors.textError};

  transition: 0.5s;

  :hover {
    background: rgba(255, 0, 0, 0.8);
  }
`;
