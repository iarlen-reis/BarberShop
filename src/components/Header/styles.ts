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
  width: 190px;

  @media (max-width: 390px) {
    width: 150px;
  }
  @media (max-width: 320px) {
    width: 110px;
  }
`;

export const NavStyled = styled.div`
  display: flex;
  align-items: center;

  list-style: none;

  gap: ${({ theme }) => theme.gap.regular};
`;

export const ProfileStyled = styled.div`
  svg {
    font-size: ${({ theme }) => theme.size.big};

    cursor: pointer;

    transition: 0.5s;

    color: ${({ theme }) => theme.colors.textWhite};

    :hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export const ButtonLogoutStyled = styled.button`
  width: 8rem;
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
