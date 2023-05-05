import styled from "styled-components";

export const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const WellcomeStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.textWhite};
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
`;
