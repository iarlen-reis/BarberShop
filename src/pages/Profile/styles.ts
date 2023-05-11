import styled from "styled-components";

export const ProfileStyled = styled.section`
  max-width: 450px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 2rem;
  margin: 0 auto;

  gap: ${({ theme }) => theme.gap.regular};
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
`;

export const ProfileEmailStyled = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.size.small};
  font-style: italic;
  font-family: ${({ theme }) => theme.font.poppins};

  color: ${({ theme }) => theme.colors.textWhite};
`;
