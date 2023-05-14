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
  modalDetails: boolean;
  document: IDocument;
  useFetchDocument: (id: string) => void;
  setModalDetails: (state: boolean) => void;
  filtered: string;
  setFiltered: (filter: string) => void;
  setFilter: (state: boolean) => void;
  filter: boolean;
}
