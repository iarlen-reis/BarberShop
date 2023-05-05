import styled from "styled-components";

interface IModal {
  isModal: boolean;
}

export const ModalStyled =
  styled.div <
  IModal >
  `
  display: ${(props) => (props.isModal ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  height: 100vh;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(255, 255, 255, 0.2);
`;

export const FormStyled = styled.form`
  position: relative;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.gap.regular};

  padding: 2rem;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.textLink};

  label {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 5px;

    font-size: ${({ theme }) => theme.size.regular};
    font-family: ${({ theme }) => theme.font.itim};

    color: ${({ theme }) => theme.colors.textWhite};
  }

  input {
    padding: 1rem;

    outline: none;
    border: none;
    border-radius: 4px;

    :nth-child(1) {
      cursor: pointer;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.regular};

  button {
    padding: 1rem 1.5rem;

    border: none;
    border-radius: 4px;

    font-family: ${({ theme }) => theme.font.itim};
    font-size: ${({ theme }) => theme.size.regular};

    cursor: pointer;

    :nth-child(1) {
      color: ${({ theme }) => theme.colors.textWhite};
      background: ${({ theme }) => theme.colors.primary};
    }

    :nth-child(2) {
      color: ${({ theme }) => theme.colors.textWhite};
      background: ${({ theme }) => theme.colors.textSuccess};
    }
  }
`;

export const CloseStyled = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  border: none;
  background: transparent;

  cursor: pointer;

  svg {
    font-size: ${({ theme }) => theme.size.regular};
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
