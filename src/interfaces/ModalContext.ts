import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IDocument {
  service: string;
  description: string;
  scheduledDate: string;
  createdAt: string;
  status: string;
  id: string;
}

export interface IModalContext {
  isModalOpen: boolean;
  setModal: () => void;
  filtered: string;
  modalDetails: boolean;
  setFiltered: (filter: string) => void;
  setFilter: (state: boolean) => void;
  setModalDetails: (state: boolean) => void;
  filter: boolean;
}
