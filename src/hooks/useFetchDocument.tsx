import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import {  useState } from "react";
import { IDocument } from "../interfaces/ModalContext";
import { useModalContext } from "../context/ModalContext";

interface IFetchDocument {
    document: IDocument,
    getDocument: (id: string) => Promise<void>
}

export const useFetchDocument = (): IFetchDocument => {
    const { setModalDetails } = useModalContext()
  const [document, setDocument] = useState<IDocument>({} as IDocument);
  

    const getDocument = async (id: string) => {
        try {
            const refDoc = await doc(db, "schedules", id);
              const docSnap = await getDoc(refDoc);
      
              const docData = {...docSnap.data(), id: docSnap.id}

              
              
              // eslint-disable-next-line prettier/prettier
              setDocument(docData as IDocument);
              setModalDetails(true);

        } catch (error) {
            console.log(error)
        }
    }
    return {document, getDocument}
};
