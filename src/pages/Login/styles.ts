import styled from "styled-components";

export const LoginStyled = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
`;

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: ${({ theme }) => theme.gap.veryBig};
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
`;

export const ImageStyled = styled.img`
  width: 325px;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
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
