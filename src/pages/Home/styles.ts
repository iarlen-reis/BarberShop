import styled from "styled-components";

export const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const WellcomeStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.textWhite};
`;

export const IntroducionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h1 {
    font-size: ${({ theme }) => theme.size.big};
  }

  p {
    font-size: ${({ theme }) => theme.size.verySmall};
    font-family: ${({ theme }) => theme.font.poppins};
  }

  @media (max-width: 500px) {
    h1 {
      font-size: ${({ theme }) => theme.size.superRegular};
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: ${({ theme }) => theme.size.regular};
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 350px) {
    h1 {
      font-size: ${({ theme }) => theme.size.small};
    }
  }
`;

export const ActionStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.regular};

  svg {
    font-size: ${({ theme }) => theme.size.superRegular};

    cursor: pointer;

    color: ${({ theme }) => theme.colors.textWhite};
  }

  @media (max-width: 350px) {
    svg {
      font-size: ${({ theme }) => theme.size.regular};
    }
  }
`;
