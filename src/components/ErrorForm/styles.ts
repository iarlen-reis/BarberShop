import styled from "styled-components";

export const ErrorStyled = styled.p`
  font-style: italic;
  font-size: ${({ theme }) => theme.size.verySmall};
  font-family: ${({ theme }) => theme.font.poppins};

  color: ${({ theme }) => theme.colors.textError};
`;
