import React from "react";
import { Link } from "react-router-dom";

import LoginImage from "/Images/Login.png";

import { FcGoogle } from "react-icons/fc";

import { ContainerStyled } from "../../styles/Global";

import * as EmailValidator from "email-validator";

import { useForm } from "react-hook-form";

import {
  LoginStyled,
  InfoStyled,
  TitleContainer,
  ImageStyled,
  FormContainer,
  FormStyled,
  ButtonContainer,
  LinkStyled,
  ErrorStyled,
} from "./styles";

interface IFormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

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
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span>E-mail:</span>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  validate: (value) => EmailValidator.validate(value),
                })}
              />
              {errors.email?.type === "required" && (
                <ErrorStyled>O E-mail é obrigatório.</ErrorStyled>
              )}
              {errors.email?.type === "validate" && (
                <ErrorStyled>O E-mail inválido.</ErrorStyled>
              )}
            </label>
            <label>
              <span>Senha:</span>
              <input
                type="password"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password?.type === "required" && (
                <ErrorStyled>A senha é obrigatória.</ErrorStyled>
              )}
              {errors.password?.type === "minLength" && (
                <ErrorStyled>
                  A senha deve ser maior que 7 caracteres.
                </ErrorStyled>
              )}
            </label>
            <ButtonContainer>
              <button>Entrar</button>
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
