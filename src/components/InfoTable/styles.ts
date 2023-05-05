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
`;

export const TBodyStyled = styled.tbody`
  font-size: ${({ theme }) => theme.size.small};
  font-family: ${({ theme }) => theme.font.poppins};

  color: ${({ theme }) => theme.colors.textWhite};

  tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.tertiary};
  }

  td {
    margin-bottom: 1.6rem;
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
`;
