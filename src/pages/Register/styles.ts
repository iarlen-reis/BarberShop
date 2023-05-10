import styled from "styled-components";

export const RegiterStyled = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  padding: 4rem 0rem;

  @media (max-width: 715px) {
    padding-top: 1rem;

    grid-template-columns: 1fr;

    grid-template-rows: 0.5fr 1fr;
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.regular};

  margin: 0 auto;

  h1 {
    width: 500px;
    font-size: ${({ theme }) => theme.size.veryBig};
    color: ${({ theme }) => theme.colors.secundary};

    text-align: center;

    text-shadow: 1px 1px 1px #000;
  }

  @media (max-width: 1015px) {
    h1 {
      width: 350px;
      font-size: ${({ theme }) => theme.size.big};
    }
  }

  @media (max-width: 815px) {
    h1 {
      width: 300px;
      font-size: ${({ theme }) => theme.size.superRegular};
    }
  }

  @media (max-width: 715px) {
    padding-bottom: 3rem;

    h1 {
      width: 350px;
      font-size: ${({ theme }) => theme.size.superRegular};
      order: 3;
    }
  }

  @media (max-width: 500px) {
    h1 {
      width: 300px;

      font-size: ${({ theme }) => theme.size.regular};
      order: 3;
    }
  }

  @media (max-width: 375px) {
    h1 {
      width: 240px;

      font-size: ${({ theme }) => theme.size.regular};
      order: 3;
    }
  }
`;

export const RegisterImageStyled = styled.img`
  width: 325px;

  margin: 0 auto;

  @media (max-width: 1015px) {
    width: 300px;
  }

  @media (max-width: 815px) {
    width: 260px;
  }

  @media (max-width: 715px) {
    width: 130px;
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.regular};

  label {
    width: 450px;

    display: flex;
    flex-direction: column;

    gap: 5px;

    span {
      font-size: ${({ theme }) => theme.size.regular};
      font-family: ${({ theme }) => theme.font.itim};

      color: ${({ theme }) => theme.colors.textWhite};
    }

    input {
      font-size: ${({ theme }) => theme.size.small};

      padding: 1.4rem 1rem;

      border: none;
      border-radius: 4px;

      outline: none;
    }
  }

  @media (max-width: 885px) {
    label {
      width: 370px;
    }
  }

  @media (max-width: 815px) {
    label {
      width: 350px;
    }
  }

  @media (max-width: 715px) {
    label {
      width: 500px;
    }
  }

  @media (max-width: 570px) {
    label {
      width: 440px;
    }
  }

  @media (max-width: 500px) {
    label {
      width: 400px;
    }
  }

  @media (max-width: 435px) {
    label {
      width: 340px;
    }
  }

  @media (max-width: 375px) {
    label {
      width: 300px;
    }
  }

  @media (max-width: 340px) {
    label {
      width: 245px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.small};

  a {
    font-family: ${({ theme }) => theme.font.itim};
    font-size: ${({ theme }) => theme.size.verySmall};

    text-align: right;
    text-decoration: none;

    transition: 300ms;

    color: ${({ theme }) => theme.colors.textWhite};

    &:hover {
      color: ${({ theme }) => theme.colors.textLink};
    }
  }
`;

export const ButtonStyled = styled.button`
  display: block;

  padding: 1rem;
  font-family: ${({ theme }) => theme.font.itim};
  font-size: ${({ theme }) => theme.size.regular};

  border: none;
  border-radius: 4px;

  cursor: pointer;
  transition: 300ms;

  color: ${({ theme }) => theme.colors.textWhite};
  background: rgba(227, 105, 54, 0.9);

  :hover {
    background: ${({ theme }) => theme.colors.secundary};
  }
`;
