import styled from "styled-components";

export const AboutStyled = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: start;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

export const DescriptionStyled = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.regular};

  color: ${({ theme }) => theme.colors.textWhite};

  h1 {
    font-size: ${({ theme }) => theme.size.veryBig};
  }

  h2 {
    font-size: ${({ theme }) => theme.size.regular};
  }

  p {
    font-size: ${({ theme }) => theme.size.small};
    font-family: ${({ theme }) => theme.font.poppins};
  }

  @media (max-width: 1100px) {
    width: 500px;
  }

  @media (max-width: 970px) {
    width: 450px;
  }

  @media (max-width: 870px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    h1 {
      font-size: ${({ theme }) => theme.size.big};
    }
  }
`;

export const LinkStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.small};

  a {
    font-size: ${({ theme }) => theme.size.small};
    font-family: ${({ theme }) => theme.font.poppins};
    text-decoration: none;

    transition: 0.5s;
    color: ${({ theme }) => theme.colors.textWhite};

    :hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const ImageStyled = styled.div`
  width: 450px;
  padding-top: 4rem;

  img {
    max-width: 100%;
  }

  @media (max-width: 870px) {
    margin: 0 auto;
    padding-top: 0;
  }

  @media (max-width: 490px) {
    width: 350px;
  }

  @media (max-width: 390px) {
    width: 270px;
  }
`;
