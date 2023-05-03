import React from "react";
import { Link } from "react-router-dom";

import LoginImage from "/Images/Login.png";

import { FcGoogle } from "react-icons/fc";

import { ContainerStyled } from "../../styles/Global";

import {
  LoginStyled,
  InfoStyled,
  TitleContainer,
  ImageStyled,
  FormContainer,
  FormStyled,
  ButtonContainer,
  LinkStyled,
} from "./styles";

const Login = () => {
  return (
    <ContainerStyled>
      <LoginStyled>
        <InfoStyled>
          <TitleContainer>
            <h1>BarberShop</h1>
            <p>Seu estilo preferido se encontra aqui!</p>
          </TitleContainer>
          <ImageStyled src={LoginImage} alt="Imagem da página de login" />
        </InfoStyled>
        <FormContainer>
          <FormStyled>
            <label>
              <span>E-mail:</span>
              <input type="text" />
            </label>
            <label>
              <span>Senha:</span>
              <input type="password" />
            </label>
            <ButtonContainer>
              <button type="submit">Entrar</button>
              <LinkStyled>
                <a href="#">
                  <FcGoogle />
                </a>
                <Link to="/register">Criar uma conta</Link>
              </LinkStyled>
            </ButtonContainer>
          </FormStyled>
        </FormContainer>
      </LoginStyled>
    </ContainerStyled>
  );
};

export default Login;
