import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

import { ILogin } from "../../interfaces/Login";

import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const { user, error, setError, loginWithGoogle, loginUserWithEmail } =
    useAuthContext();

  const navigate = useNavigate();

  const onSubmit = async (data: ILogin) => {
    loginUserWithEmail(data);

    if (user) navigate("/");
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle();
    // Then removed
    if (user) navigate("/");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error !== "") {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setError("");
    }
  }, [error]);

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
                autoComplete="off"
                {...register("displayEmail", {
                  required: true,
                  validate: (value) => EmailValidator.validate(value),
                })}
              />
              {errors.displayEmail?.type === "required" && (
                <ErrorStyled>O E-mail é obrigatório.</ErrorStyled>
              )}
              {errors.displayEmail?.type === "validate" && (
                <ErrorStyled>O E-mail inválido.</ErrorStyled>
              )}
            </label>
            <label>
              <span>Senha:</span>
              <input
                type="password"
                {...register("displayPassword", {
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.displayPassword?.type === "required" && (
                <ErrorStyled>A senha é obrigatória.</ErrorStyled>
              )}
              {errors.displayPassword?.type === "minLength" && (
                <ErrorStyled>
                  A senha deve ser maior que 7 caracteres.
                </ErrorStyled>
              )}
            </label>
            <ButtonContainer>
              <button>Entrar</button>
              <LinkStyled>
                <a href="#">
                  <FcGoogle onClick={handleLoginWithGoogle} />
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
