import React from "react";

import { ErrorStyled } from "./styles";

interface IErrorForm {
  message: string;
}

const ErrorForm = ({ message }: IErrorForm) => {
  return <ErrorStyled>{message}</ErrorStyled>;
};

export default ErrorForm;
