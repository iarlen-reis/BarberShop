import styled from "styled-components";

export const ProfileStyled = styled.section`
  max-width: 450px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 2rem;
  margin: 0 auto;

  gap: ${({ theme }) => theme.gap.big};
`;

export const ProfileImageStyled = styled.div`
  width: 180px;

  margin: 0 auto;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const ProfileNameStyled = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.size.big};

  color: ${({ theme }) => theme.colors.textWhite};

  @media (max-width: 350px) {
    font-size: ${({ theme }) => theme.size.regular};
  }
`;

export const ProfileEmailStyled = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.size.small};
  font-style: italic;
  font-family: ${({ theme }) => theme.font.poppins};

  color: ${({ theme }) => theme.colors.textWhite};

  @media (max-width: 350px) {
    font-size: ${({ theme }) => theme.size.verySmall};
  }
`;

export const ServiceStyled = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  gap: ${({ theme }) => theme.gap.small};

  color: ${({ theme }) => theme.colors.textWhite};

  h2 {
    font-size: ${({ theme }) => theme.size.superRegular};
  }

  > div {
    display: flex;
    font-size: ${({ theme }) => theme.size.regular};
    font-family: ${({ theme }) => theme.font.poppins};

    gap: ${({ theme }) => theme.gap.small};
  }

  @media (max-width: 530px) {
    h2 {
      font-size: ${({ theme }) => theme.size.regular};
    }

    > div {
      font-size: ${({ theme }) => theme.size.small};
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: ${({ theme }) => theme.size.regular};
    }

    > div {
      font-size: ${({ theme }) => theme.size.verySmall};
    }
  }

  @media (max-width: 350px) {
    h2 {
      font-size: ${({ theme }) => theme.size.small};
    }

    > div {
      font-size: ${({ theme }) => theme.size.verySmall};
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;

export const ButtonDeleteStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.size.small};
  font-family: ${({ theme }) => theme.font.poppins};

  gap: ${({ theme }) => theme.gap.small};

  padding: 1.1rem;

  margin: 0 auto;

  border: none;
  border-radius: 4px;

  cursor: pointer;
  transition: 0.5s;

  color: ${({ theme }) => theme.colors.textWhite};
  background: rgba(255, 0, 0, 0.7);

  :hover {
    background: ${({ theme }) => theme.colors.textError};
  }

  @media (max-width: 420px) {
    padding: 0.8rem;

    font-size: 1.4rem;
  }
`;
