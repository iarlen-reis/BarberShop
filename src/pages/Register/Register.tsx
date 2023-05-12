import React, { useEffect } from "react";
import { ContainerStyled } from "../../styles/Global";

import { Link } from "react-router-dom";

import RegisterImage from "/Images/Register.png";

import { useForm } from "react-hook-form";

import ErrorForm from "../../components/ErrorForm/ErrorForm";

import * as EmailValidator from "email-validator";

import {
  RegiterStyled,
  InfoStyled,
  RegisterImageStyled,
  FormContainer,
  FormStyled,
  ButtonContainer,
  ButtonStyled,
} from "./styles";

interface IFormData {
  displayName: string;
  displayEmail: string;
  displayPassword: string;
  passwordConfirmation: string;
}

import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const watchPassword = watch("displayPassword");

  const { user, useCreateUserWithEmail } = useAuthContext();

  const navigate = useNavigate();

  const onSubmit = async (data: IFormData) => {
    await useCreateUserWithEmail(data);

    navigate("/");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span>Nome:</span>
              <input
                type="text"
                placeholder="José Santos"
                {...register("displayName", { required: true })}
              />
              {errors.displayName?.type === "required" && (
                <ErrorForm message="O nome é obrigatório." />
              )}
            </label>
            <label htmlFor="">
              <span>E-mail:</span>
              <input
                type="email"
                placeholder="Email@gmail.com"
                {...register("displayEmail", {
                  required: true,
                  validate: (value) => EmailValidator.validate(value),
                })}
              />
              {errors.displayEmail?.type === "required" && (
                <ErrorForm message="O E-mail é obrigatório." />
              )}
              {errors.displayEmail?.type === "validate" && (
                <ErrorForm message="O E-mail é inválido." />
              )}
            </label>
            <label htmlFor="">
              <span>Senha:</span>
              <input
                type="password"
                {...register("displayPassword", {
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.displayPassword?.type === "required" && (
                <ErrorForm message="A senha é obrigtória." />
              )}
              {errors.displayPassword?.type === "minLength" && (
                <ErrorForm message="A senha deve ser maior que 7 caracteres." />
              )}
            </label>
            <label htmlFor="">
              <span>Confirmar Senha:</span>
              <input
                type="password"
                {...register("passwordConfirmation", {
                  required: true,
                  minLength: 8,
                  validate: (value) => value === watchPassword,
                })}
              />
              {errors.passwordConfirmation?.type === "required" && (
                <ErrorForm message="A senha é obrigtória." />
              )}
              {errors.passwordConfirmation?.type === "minLength" && (
                <ErrorForm message="A senha deve ser maior que 7 caracteres." />
              )}
              {errors.passwordConfirmation?.type === "validate" && (
                <ErrorForm message="As senhas não conferem." />
              )}
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
