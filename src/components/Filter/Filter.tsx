import React from "react";

import { FilterStyled } from "./styles";

interface IFilterProps {
  isVisible: boolean;
}

const Filter = ({ isVisible }: IFilterProps) => {
  return (
    <FilterStyled isVisible={isVisible}>
      <option value="">Selecione</option>
      <option value="pendente">Pedentes</option>
      <option value="cancelado">Cancelados</option>
      <option value="finalizado">Finalizados</option>
    </FilterStyled>
  );
};

export default Filter;
