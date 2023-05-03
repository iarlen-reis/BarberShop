import React from "react";
import { ContainerStyled } from "../../styles/Global";

import { Link } from "react-router-dom";

import RegisterImage from "/Images/Register.png";

import {
  RegiterStyled,
  InfoStyled,
  RegisterImageStyled,
  FormContainer,
  FormStyled,
  ButtonContainer,
  ButtonStyled,
} from "./styles";

const Register = () => {
  return (
    <ContainerStyled>
      <RegiterStyled>
        <InfoStyled>
          <h1>Registre-se agora e tenha uma mudança de visual incrivel!</h1>
          <RegisterImageStyled
            src={RegisterImage}
            alt="Imagem da página de registro"
          />
        </InfoStyled>
        <FormContainer>
          <FormStyled>
            <label htmlFor="">
              <span>Nome:</span>
              <input type="text" placeholder="José Santos" />
            </label>
            <label htmlFor="">
              <span>E-mail:</span>
              <input type="email" placeholder="Email@gmail.com" />
            </label>
            <label htmlFor="">
              <span>Senha:</span>
              <input type="password" />
            </label>
            <label htmlFor="">
              <span>Confirmar Senha:</span>
              <input type="password" />
            </label>
            <ButtonContainer>
              <ButtonStyled type="submit">Criar Conta</ButtonStyled>
              <Link to="/login">Já possui uma conta?</Link>
            </ButtonContainer>
          </FormStyled>
        </FormContainer>
      </RegiterStyled>
    </ContainerStyled>
  );
};

export default Register;
