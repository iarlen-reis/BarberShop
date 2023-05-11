import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;

  font-family: ${({ theme }) => theme.font.poppins};

  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};

  color: ${({ theme }) => theme.colors.textWhite};
  background: ${({ theme }) => theme.colors.secundary};

  a {
    font-size: ${({ theme }) => theme.size.small};
    text-decoration: none;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.textWhite};

    :hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  @media (max-width: 620px) {
    a,
    p {
      font-size: ${({ theme }) => theme.size.verySmall};
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  padding: 2rem;

  margin: 0 auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.regular};
`;

export const LinkStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.regular};
`;

export const DevelopedByStyled = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.size.small};

  gap: ${({ theme }) => theme.gap.small};
`;
