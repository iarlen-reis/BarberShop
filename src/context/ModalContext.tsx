import React, { createContext, useContext, useState } from "react";

import { IChildren, IModalContext } from "../interfaces/ModalContext";

const initalState = {
  isModalOpen: false,
  modalDetails: false,
  filtered: "",
  filter: false,
  setModal: () => ({}),
  setFiltered: () => ({}),
  setFilter: () => ({}),
  setModalDetails: () => ({}),
};

export const ModalContext = createContext<IModalContext>(initalState);

export const ModalProvider = ({ children }: IChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(initalState.isModalOpen);
  const [filtered, setFiltered] = useState(initalState.filtered);
  const [filter, setFilter] = useState(initalState.filter);
  const [modalDetails, setModalDetails] = useState(false);

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setModal,
        filtered,
        setFiltered,
        filter,
        setFilter,
        modalDetails,
        setModalDetails,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
