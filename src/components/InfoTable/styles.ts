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

  td:nth-child(5) {
    display: flex;
  }

  svg {
    font-size: ${({ theme }) => theme.size.small};
    margin-right: 2rem;

    cursor: pointer;
  }
`;
