import React, { ReactNode, createContext, useContext, useState } from "react";

const initalState = {
  isModalOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setModal: () => {},
};

interface IChildren {
  children: ReactNode;
}

interface IModalContext {
  isModalOpen: boolean;
  setModal: () => void;
}

export const ModalContext = createContext<IModalContext>(initalState);

export const ModalProvider = ({ children }: IChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(initalState.isModalOpen);

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
