import React, { ChangeEvent } from "react";

import { FilterStyled } from "./styles";

import { IFilterProps } from "../../interfaces/Filter";

import { useModalContext } from "../../context/ModalContext";

const Filter = ({ isVisible }: IFilterProps) => {
  const { setFiltered, setFilter } = useModalContext();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setFiltered(String(event.target.value));
    setFilter(false);
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
