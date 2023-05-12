import styled from "styled-components";

export const PaginationStyled = styled.ul`
  max-width: min-content;
  display: flex;

  padding: 1rem;
  gap: ${({ theme }) => theme.gap.small};

  list-style: none;

  border-radius: 4px;

  background: ${({ theme }) => theme.colors.secundary};
`;

interface ICurrentPage {
  current: boolean;
}

export const LiStyled =
  styled.li <
  ICurrentPage >
  `
    height: 2.5rem;
    width: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.font.itim};
    font-weight: bold;

    border-radius: 50%;
    cursor: pointer;
    
    transition: 0.3s;

    color: ${({ theme }) => theme.colors.textBack};
    background: ${(props) =>
      props.current
        ? props.theme.colors.textWhite
        : props.theme.colors.tertiary};

    :hover {
        background: ${({ theme }) => theme.colors.tertiary};
    }
`;
