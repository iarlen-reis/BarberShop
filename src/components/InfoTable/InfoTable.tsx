import React from "react";

import { MdDelete } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";

import { TableStyled, TheadStyled, TBodyStyled, NoFound } from "./styles";

import { getUserDocuments } from "../../hooks/useFetchDocuments";
import Loading from "../Loading/Loading";

const InfoTable = () => {
  const { schedules, loading } = getUserDocuments();

  if (loading) return <Loading />;

  return (
    <>
      {schedules && schedules.length > 0 ? (
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
            {schedules &&
              schedules?.length > 0 &&
              schedules.map((schedule) => (
                <tr key={schedule.id}>
                  <td>{schedule.service}</td>
                  <td>{schedule.createdAt}</td>
                  <td>{schedule.scheduledDate}</td>
                  <td>{schedule.status}</td>
                  <td>
                    <BsSearch />
                    <MdDelete />
                  </td>
                </tr>
              ))}
          </TBodyStyled>
        </TableStyled>
      ) : (
        <NoFound>
          <h2>Nenhum agendamento encontrado.</h2>
          <p>
            Clique em <IoAddOutline /> para agendar um horário.
          </p>
        </NoFound>
      )}
    </>
  );
};

export default InfoTable;
