import React from "react";
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
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const watchPassword = watch("password");

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

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
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <ErrorForm message="O nome é obrigatório." />
              )}
            </label>
            <label htmlFor="">
              <span>E-mail:</span>
              <input
                type="email"
                placeholder="Email@gmail.com"
                {...register("email", {
                  required: true,
                  validate: (value) => EmailValidator.validate(value),
                })}
              />
              {errors.email?.type === "required" && (
                <ErrorForm message="O E-mail é obrigatório." />
              )}
              {errors.email?.type === "validate" && (
                <ErrorForm message="O E-mail é inválido." />
              )}
            </label>
            <label htmlFor="">
              <span>Senha:</span>
              <input
                type="password"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password?.type === "required" && (
                <ErrorForm message="A senha é obrigtória." />
              )}
              {errors.password?.type === "minLength" && (
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
