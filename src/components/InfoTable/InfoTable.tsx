import React, { useState } from "react";

import { MdDelete } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";

import { TableStyled, TheadStyled, TBodyStyled, NoFound } from "./styles";

import { getUserDocuments } from "../../hooks/useFetchDocuments";
import Loading from "../Loading/Loading";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

import { useModalContext } from "../../context/ModalContext";
import { deleteDocument } from "../../hooks/useDeleteDocument";

import Pagination from "../Pagination/Pagination";

const InfoTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [docsPerPage, setDocsPerPage] = useState(9);

  const { schedules, loading } = getUserDocuments();

  const { useFetchDocument, filtered } = useModalContext();

  if (loading) return <Loading />;

  const schedulesFilter = schedules?.filter((schedule) =>
    schedule.status.includes(filtered),
  );

  const indexOfLastDoc = currentPage * docsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
  const currentDocs = schedulesFilter?.slice(indexOfFirstDoc, indexOfLastDoc);

  return (
    <>
      {currentDocs && currentDocs.length > 0 ? (
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
            {currentDocs &&
              currentDocs?.length > 0 &&
              currentDocs.map((schedule) => (
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
          <h2>Nenhum agendamento {filtered} encontrado.</h2>
          <p>
            Clique em <IoAddOutline /> para agendar um horário.
          </p>
        </NoFound>
      )}
      {currentDocs && currentDocs.length < 0 && (
        <NoFound>
          <h2>Nenhum agendamento encontrado.</h2>
          <p>
            Clique em <IoAddOutline /> para agendar um horário.
          </p>
        </NoFound>
      )}
      {schedulesFilter && schedulesFilter.length > 0 && (
        <Pagination
          docs={schedulesFilter && schedulesFilter.length}
          docsPerPage={docsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      <ServiceDetails />
    </>
  );
};

export default InfoTable;
