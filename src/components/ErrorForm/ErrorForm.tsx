import React from "react";

import { ErrorStyled } from "./styles";

import { IErrorForm } from "../../interfaces/ErrorForm";

const ErrorForm = ({ message }: IErrorForm) => {
  return <ErrorStyled>{message}</ErrorStyled>;
};

export default ErrorForm;
