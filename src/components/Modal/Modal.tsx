import React, { FormEvent } from "react";

import { AiOutlineClose } from "react-icons/ai";

import {
  ModalStyled,
  FormStyled,
  ButtonContainer,
  CloseStyled,
} from "./styles";

import { useModalContext } from "../../context/ModalContext";

const Modal = () => {
  const { isModalOpen, setModal } = useModalContext();

  const closeModal = (event: FormEvent) => {
    event.preventDefault();
    setModal();
  };

  return (
    <ModalStyled isModal={isModalOpen}>
      <FormStyled>
        <label>
          <span>Serviço:</span>
          <input type="text" placeholder="Corte, Barba, Pé de Cabelo.." />
        </label>
        <label>
          <span>Descrição:</span>
          <input type="text" placeholder="Corte disfarçado e fazer a barba.." />
        </label>
        <div>
          <input type="datetime-local" min="01-05-2023" />
        </div>
        <ButtonContainer>
          <button>Limpar</button>
          <button>Agendar</button>
        </ButtonContainer>
        <CloseStyled>
          <AiOutlineClose onClick={(event) => closeModal(event)} />
        </CloseStyled>
      </FormStyled>
    </ModalStyled>
  );
};

export default Modal;
