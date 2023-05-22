import React from "react";

import {
  ServiceDetailsStyled,
  DetailsContainer,
  TitleStyled,
  TimeStyled,
  DeleteStyled,
  CloseStyled,
} from "./styles";

import { AiOutlineClose } from "react-icons/ai";

import { deleteDocument } from "../../hooks/useDeleteDocument";
import { useModalContext } from "../../context/ModalContext";
import { IDocument } from "../../interfaces/ModalContext";

interface IServiceDetails {
  document: IDocument;
}

const ServiceDetails = ({ document }: IServiceDetails) => {
  const { setModalDetails, modalDetails } = useModalContext();

  const handleDeleteDocument = (id: string) => {
    deleteDocument(id);

    setModalDetails(false);
  };

  return (
    <ServiceDetailsStyled details={modalDetails}>
      <DetailsContainer>
        <TitleStyled>
          <h1>{document.service}</h1>
          <p>
            Descrição: <span>- {document.description}</span>
          </p>
        </TitleStyled>

        <TimeStyled>
          <p>
            Horário agendado: <span>- {document.scheduledDate}</span>
          </p>
          <p>
            Criado em: <span>- {document.createdAt}</span>
          </p>
          <p>
            Status: <span>- {document.status}</span>
          </p>
        </TimeStyled>
        <DeleteStyled>
          <button onClick={() => handleDeleteDocument(document.id)}>
            Deletar
          </button>
        </DeleteStyled>
        <CloseStyled>
          <AiOutlineClose onClick={() => setModalDetails(false)} />
        </CloseStyled>
      </DetailsContainer>
    </ServiceDetailsStyled>
  );
};

export default ServiceDetails;
