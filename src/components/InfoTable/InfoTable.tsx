import React from "react";

import { MdDelete } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

import { TableStyled, TheadStyled, TBodyStyled } from "./styles";

import Modal from "../Modal/Modal";

const InfoTable = () => {
  return (
    <TableStyled>
      <TheadStyled>
        <tr>
          <th>Serviço</th>
          <th>Criado em</th>
          <th>Horário agendado</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </TheadStyled>
      <TBodyStyled>
        <tr>
          <td>Corte</td>
          <td>05-05-2023</td>
          <td>06-05-2023, 11:30</td>
          <td>Pendente</td>
          <td>
            <BsSearch />
            <MdDelete />
          </td>
        </tr>

        <tr>
          <td>Barba</td>
          <td>05-05-2023</td>
          <td>06-05-2023, 13:00</td>
          <td>Cancelado</td>
          <td>
            <BsSearch />
            <MdDelete />
          </td>
        </tr>
      </TBodyStyled>
      <Modal />
    </TableStyled>
  );
};

export default InfoTable;
