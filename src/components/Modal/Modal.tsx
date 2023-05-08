import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import {
  ModalStyled,
  FormStyled,
  ButtonContainer,
  CloseStyled,
} from "./styles";

import { AiOutlineClose } from "react-icons/ai";

import ErrorForm from "../ErrorForm/ErrorForm";

import { useModalContext } from "../../context/ModalContext";
import { createDocument } from "../../hooks/useInsertDocument";

import { toLocalDate } from "../../utils/transformDate";

interface IFormData {
  service: string;
  description: string;
  scheduledDate: string;
}

const Modal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();

  const { isModalOpen, setModal } = useModalContext();
  const { loading, insertDocument } = createDocument();

  const closeModal = (event: FormEvent) => {
    event.preventDefault();
    reset();

    setModal();
  };

  const onSubmit = (data: IFormData) => {
    data = toLocalDate(data);

    insertDocument(data);

    reset();

    setModal();
  };

  const clearModalForm = (event: FormEvent) => {
    event.preventDefault();
    reset();
  };

  return (
    <ModalStyled isModal={isModalOpen}>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Serviço:</span>
          <input
            type="text"
            placeholder="Corte, Barba, Pé de Cabelo.."
            {...register("service", { required: true })}
          />
          {errors.service && errors.service.type === "required" && (
            <ErrorForm message="O Serviço é obrigatório." />
          )}
        </label>
        <label>
          <span>Descrição:</span>
          <input
            type="text"
            placeholder="Corte disfarçado e fazer a barba.."
            {...register("description", { required: true })}
          />
          {errors.description && errors.description.type === "required" && (
            <ErrorForm message="A Descrição é obrigatória." />
          )}
        </label>
        <div>
          <input
            type="datetime-local"
            min="01-01-2023"
            {...register("scheduledDate", { required: true })}
          />
          {errors.scheduledDate && errors.scheduledDate.type === "required" && (
            <ErrorForm message="Selecione a data de agendamento." />
          )}
        </div>
        <ButtonContainer>
          <button onClick={(event) => clearModalForm(event)}>Limpar</button>
          <button>{loading ? "Agendando..." : "Agendar"}</button>
        </ButtonContainer>
        <CloseStyled>
          <AiOutlineClose onClick={(event) => closeModal(event)} />
        </CloseStyled>
      </FormStyled>
    </ModalStyled>
  );
};

export default Modal;
