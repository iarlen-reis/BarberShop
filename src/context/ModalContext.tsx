import 
React, 
{ 
createContext, 
useContext, 
useState 
} from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

import {IChildren, IDocument, IModalContext} from '../interfaces/ModalContext'

const initalState = {
  isModalOpen: false,
  setModal: () => ({}),
  modalDetails: false,
  document: {} as IDocument,
  useFetchDocument: () => ({}),
  setModalDetails: () => ({}),
  filtered: '',
  setFiltered: () => ({}),
  setFilter: () => ({}),
  filter: false,

};

export const ModalContext = createContext<IModalContext>(initalState);

export const ModalProvider = ({ children }: IChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(initalState.isModalOpen);
  const [modalDetails, setModalDetails] = useState(initalState.modalDetails);
  const [document, setDocument] = useState<IDocument>(initalState.document);
  const [filtered, setFiltered] = useState(initalState.filtered)
  const [filter, setFilter] = useState(initalState.filter);


  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const useFetchDocument = (id: string) => {
      const getDocument = async () => {
        try {
          const refDoc = await doc(db, "schedules", id);
          const docSnap = await getDoc(refDoc);
  
          const docData = {...docSnap.data(), id: docSnap.id}
          
          setDocument(docData as IDocument);
        } catch (error) {
          console.log(error);
        }
        finally{
            setModalDetails(true);
        }
      };
      getDocument()
  };

  return (
    <ModalContext.Provider
     value={{ 
        isModalOpen, 
        setModal, 
        modalDetails, 
        document, 
        useFetchDocument, 
        setModalDetails,
        filtered,
        setFiltered,
        filter,
        setFilter
        }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
