import styled from "styled-components";

export const LoginStyled = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  @media (max-width: 715px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;

    gap: ${({ theme }) => theme.gap.veryBig};
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: ${({ theme }) => theme.gap.regular};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${({ theme }) => theme.size.veryBig};

    text-shadow: 1px 1px 1px #000;
    font-style: italic;

    color: ${({ theme }) => theme.colors.secundary};
  }

  p {
    font-size: ${({ theme }) => theme.size.regular};
    font-family: ${({ theme }) => theme.font.poppins};
    font-style: italic;

    text-shadow: 1px 1px 1px #000;

    color: ${({ theme }) => theme.colors.secundary};
  }

  @media (max-width: 980px) {
    p {
      font-size: ${({ theme }) => theme.size.small};
    }
  }

  @media (max-width: 875px) {
    h1 {
      font-size: ${({ theme }) => theme.size.big};
    }
  }

  @media (max-width: 715px) {
    text-align: center;
    order: 3;

    h1 {
      font-size: ${({ theme }) => theme.size.veryBig};
    }

    p {
      font-size: ${({ theme }) => theme.size.regular};
    }
  }

  @media (max-width: 510px) {
    h1 {
      font-size: ${({ theme }) => theme.size.big};
    }

    p {
      font-size: ${({ theme }) => theme.size.small};
    }
  }
`;

export const ImageStyled = styled.img`
  width: 325px;
  margin: 0 auto;

  @media (max-width: 715px) {
    width: 220px;
  }

  @media (max-width: 510px) {
    width: 180px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  @media (max-width: 715px) {
    justify-content: start;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ theme }) => theme.gap.regular};

  label {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    font-size: ${({ theme }) => theme.size.regular};
    font-family: ${({ theme }) => theme.font.itim};

    color: ${({ theme }) => theme.colors.textWhite};
  }

  input {
    padding: 1.4rem 1rem;

    outline: none;

    border: none;
    border-radius: 4px;
  }

  @media (max-width: 875px) {
    label {
      width: 350px;
    }
  }

  @media (max-width: 770px) {
    label {
      width: 330px;
    }
  }

  @media (max-width: 715px) {
    label {
      width: 450px;
    }
  }

  @media (max-width: 510px) {
    label {
      width: 380px;
    }
  }

  @media (max-width: 420px) {
    label {
      width: 340px;
    }
  }

  @media (max-width: 380px) {
    label {
      width: 300px;
    }
  }

  @media (max-width: 335px) {
    label {
      width: 270px;
    }
  }

  @media (max-width: 310px) {
    label {
      width: 240px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 10px;

  button {
    padding: 1rem;

    font-size: ${({ theme }) => theme.size.regular};
    font-family: ${({ theme }) => theme.font.itim};

    outline: none;
    border: none;
    border-radius: 4px;

    cursor: pointer;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.textWhite};
    background: ${({ theme }) => theme.colors.secundary};

    :hover {
      background: rgba(183, 80, 18, 0.9);
    }
  }
`;

export const LinkStyled = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: ${({ theme }) => theme.size.small};
    font-family: ${({ theme }) => theme.font.itim};

    text-decoration: none;

    transition: 0.5s;
    color: ${({ theme }) => theme.colors.textWhite};

    :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      padding: 0.5rem;

      border-radius: 50%;

      :hover {
        transform: scaleY(1.1) scaleX(1.1);
      }
    }

    :nth-child(2) {
      :hover {
        color: ${({ theme }) => theme.colors.textLink};
      }
    }
  }
`;
