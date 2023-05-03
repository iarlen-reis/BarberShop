import styled from "styled-components";

export const RegiterStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  padding-top: 4rem;
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
`;

export const RegisterImageStyled = styled.img`
  width: 325px;

  margin: 0 auto;
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
