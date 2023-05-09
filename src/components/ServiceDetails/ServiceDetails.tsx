import React from "react";

import {
  ServiceDetailsStyled,
  DetailsContainer,
  TitleStyled,
  TimeStyled,
  DeleteStyled,
  CloseStyled,
} from "./styles";

import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { useModalContext } from "../../context/ModalContext";

const ServiceDetails = () => {
  const { modalDetails, document, setModalDetails } = useModalContext();

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
        </TimeStyled>
        <DeleteStyled>
          <button>
            <MdDelete />
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
