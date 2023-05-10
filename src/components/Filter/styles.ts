import styled from "styled-components";

interface IFilterProps {
  isVisible: boolean;
}

export const FilterStyled =
  styled.select <
  IFilterProps >
  `
  position: absolute;
  width: 150px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  top: 3.5rem;
  right: 0.6rem;

    font-family: ${({ theme }) => theme.font.poppins};

  padding: 0.5rem;

  cursor: pointer;

  outline: none;
  border: none;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.textLink};
  background: ${({ theme }) => theme.colors.textWhite};

  @media(max-width: 500px) {
    top: 2.9rem;
    padding: 0.4rem;
    width: 100px;
  }

  @media(max-width: 400px) {
    top: 2.5rem;
    padding: 0.2rem;
  }
`;
