import styled from "styled-components";

interface IDetails {
  details: boolean;
}

export const ServiceDetailsStyled =
  styled.div <
  IDetails >
  `
  position: absolute;
  display: ${(props) => (props.details ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  padding: 2rem;

  background: ${({ theme }) => theme.colors.tertiary};
`;

export const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;

  gap: ${({ theme }) => theme.gap.regular};
  padding: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.textWhite};
  background: ${({ theme }) => theme.colors.secundary};
`;

export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.small};

  h1 {
    font-size: ${({ theme }) => theme.size.superRegular};
    text-align: center;
  }

  p {
    font-size: ${({ theme }) => theme.size.small};
    font-family: ${({ theme }) => theme.font.poppins};

    span {
      display: block;
      padding-left: 1rem;
    }
  }
`;

export const TimeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.small};

  p {
    font-size: ${({ theme }) => theme.size.small};
    font-family: ${({ theme }) => theme.font.poppins};

    span {
      display: block;
      padding-left: 1rem;
    }
  }
`;

export const DeleteStyled = styled.div`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${({ theme }) => theme.size.small};
    font-family: ${({ theme }) => theme.font.poppins};

    gap: ${({ theme }) => theme.gap.small};

    padding: 1rem;

    border: none;
    border-radius: 4px;
    cursor: pointer;

    transition: 0.5s;

    color: ${({ theme }) => theme.colors.textWhite};
    background: rgba(255, 0, 0, 0.7);

    :hover {
      background: rgb(255, 0, 0);
    }
  }
`;

export const CloseStyled = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    font-size: ${({ theme }) => theme.size.regular};

    transition: 0.5s;

    cursor: pointer;
    color: ${({ theme }) => theme.colors.textWhite};

    :hover {
      color: rgb(255, 0, 0);
    }
  }
`;
