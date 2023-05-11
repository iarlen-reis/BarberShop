import styled, { keyframes } from "styled-components";

const AnimationMobile = keyframes`
    from {
        left: -100%;
    }
    to {
        left: 0;
    }
`;

export const HeaderStyled = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.secundary};

  margin-bottom: 2rem;
`;

export const HeaderContainer = styled.div`
  position: relative;
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
`;

interface IMobile {
  mobile: boolean;
}

export const NavStyled =
  styled.div <
  IMobile >
  `
  display: flex;
  align-items: center;

  list-style: none;

  gap: ${({ theme }) => theme.gap.big};


  a {
    font-family: ${({ theme }) => theme.font.itim};
    font-size: ${({ theme }) => theme.size.regular};
    color: ${({ theme }) => theme.colors.textWhite};
  
    text-decoration: none;
  }

  svg {
    font-size: ${({ theme }) => theme.size.superRegular};

    transition: 0.5s;

    :hover {
        color: rgba(255, 255, 255, 0.7);
      }
  }

  @media (max-width: 580px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 8rem;
    left: 0;
    z-index: 2;

    animation:${AnimationMobile} ease-in-out 2s;


    background: ${({ theme }) => theme.colors.secundary};
  }

  @media (max-width: 390px) {
    top: 6.6rem;
  }


`;

export const ProfileStyled = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.textWhite};
  padding-right: 1rem;

  svg {
    font-size: ${({ theme }) => theme.size.big};

    cursor: pointer;

    transition: 0.5s;

    color: ${({ theme }) => theme.colors.textWhite};

    :hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  @media (max-width: 580px) {
    padding-right: 0;
    border-right: none;

    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};
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

export const MobileStyled = styled.div`
  display: flex;
  align-items: center;

  display: none;

  svg {
    font-size: ${({ theme }) => theme.size.big};

    cursor: pointer;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.textWhite};

    :hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  @media (max-width: 580px) {
    display: flex;
  }
`;
