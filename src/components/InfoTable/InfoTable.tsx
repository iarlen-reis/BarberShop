import React from "react";

import { MdDelete } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";

import { TableStyled, TheadStyled, TBodyStyled, NoFound } from "./styles";

import { getUserDocuments } from "../../hooks/useFetchDocuments";
import Loading from "../Loading/Loading";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

import { useModalContext } from "../../context/ModalContext";
import { deleteDocument } from "../../hooks/useDeleteDocument";

const InfoTable = () => {
  const { schedules, loading } = getUserDocuments();

  const { useFetchDocument } = useModalContext();

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
                    <BsSearch onClick={() => useFetchDocument(schedule.id)} />
                    <MdDelete onClick={() => deleteDocument(schedule.id)} />
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
      <ServiceDetails />
    </>
  );
};

export default InfoTable;
