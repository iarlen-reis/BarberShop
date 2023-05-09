import 
React, 
{ 
ReactNode, 
createContext, 
useContext, 
useState 
} from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const initalState = {
  isModalOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setModal: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  modalDetails: false,
  // eslint-disable-next-line prettier/prettier
  document: {} as IDocument,
  useFetchDocument: () => ({}),
  setModalDetails: () => ({})
};

interface IChildren {
  children: ReactNode;
}

interface IDocument {
  service: string;
  description: string;
  scheduledDate: string;
  createdAt: string;
}

interface IModalContext {
  isModalOpen: boolean;
  setModal: () => void;
  modalDetails: boolean;
  document: IDocument;
  useFetchDocument: (id: string) => void;
  setModalDetails: (state: boolean) => void;
}



export const ModalContext = createContext<IModalContext>(initalState);

export const ModalProvider = ({ children }: IChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(initalState.isModalOpen);
  const [modalDetails, setModalDetails] = useState(initalState.modalDetails);
  const [document, setDocument] = useState<IDocument>(initalState.document);

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const useFetchDocument = (id: string) => {
      const getDocument = async () => {
        try {
          const refDoc = await doc(db, "schedules", id);
          const docSnap = await getDoc(refDoc);
  
          // eslint-disable-next-line prettier/prettier
          setDocument(docSnap.data() as IDocument);
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
        setModalDetails }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
