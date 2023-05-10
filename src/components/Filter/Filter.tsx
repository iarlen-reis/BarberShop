import React, { ChangeEvent } from "react";

import { FilterStyled } from "./styles";

import { useModalContext } from "../../context/ModalContext";

interface IFilterProps {
  isVisible: boolean;
}

const Filter = ({ isVisible }: IFilterProps) => {
  const { setFiltered } = useModalContext();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setFiltered(String(event.target.value));
  };

  return (
    <FilterStyled
      isVisible={isVisible}
      onChange={(event) => handleSelect(event)}
    >
      <option value="">Todos</option>
      <option value="pendente">Pedentes</option>
      <option value="cancelado">Cancelados</option>
      <option value="finalizado">Finalizados</option>
    </FilterStyled>
  );
};

export default Filter;
