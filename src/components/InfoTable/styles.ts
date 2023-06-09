import styled from "styled-components";

export const TableStyled = styled.table`
  text-align: left;
`;

export const TheadStyled = styled.thead`
  font-size: ${({ theme }) => theme.size.regular};
  font-family: ${({ theme }) => theme.font.itim};

  color: ${({ theme }) => theme.colors.textWhite};

  th {
    width: calc(100% / 4);
    padding-bottom: 1rem;
  }

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.size.small};
  }

  @media (max-width: 580px) {
    th {
      width: calc(100% / 2);
    }

    th:nth-child(2),
    th:nth-child(4) {
      display: none;
    }
  }
`;

export const TBodyStyled = styled.tbody`
  font-size: ${({ theme }) => theme.size.small};
  font-family: ${({ theme }) => theme.font.poppins};

  color: ${({ theme }) => theme.colors.textWhite};

  tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.secundary};
  }

  td {
    margin-bottom: 1.6rem;
  }

  td:nth-child(1) {
    cursor: pointer;

    transition: 0.5s;

    :hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  td:nth-child(5) {
    display: flex;
    align-items: center;
    margin-top: 1.6rem;
  }

  svg {
    font-size: 1.7rem;
    margin-right: 2rem;

    cursor: pointer;
    transition: 0.5s;

    :nth-child(1) {
      margin-left: 1.2rem;
    }

    :hover {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.size.verySmall};
  }

  @media (max-width: 580px) {
    td:nth-child(2),
    td:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const NoFound = styled.div`
  text-align: center;

  h2 {
    text-align: center;

    font-size: ${({ theme }) => theme.size.big};

    color: ${({ theme }) => theme.colors.textWhite};

    margin-bottom: 0.5rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: ${({ theme }) => theme.size.regular};
    font-family: ${({ theme }) => theme.font.poppins};

    color: ${({ theme }) => theme.colors.textWhite};
  }

  svg {
    font-size: ${({ theme }) => theme.size.regular};

    color: ${({ theme }) => theme.colors.textWhite};
  }

  @media (max-width: 470px) {
    h2 {
      font-size: ${({ theme }) => theme.size.regular};
    }

    p {
      font-size: ${({ theme }) => theme.size.small};
    }
  }

  @media (max-width: 375px) {
    h2 {
      width: 230px;
      margin: 0 auto;
      font-size: ${({ theme }) => theme.size.small};
    }

    p {
      font-size: ${({ theme }) => theme.size.verySmall};
    }
  }
`;
