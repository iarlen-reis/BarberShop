import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

import { IDocument } from "../interfaces/useInsertDocument";

import { useAuthContext } from "../context/AuthContext";

export const createDocument = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);

  const dateActual = new Date().toLocaleString();

  const insertDocument = async (document: IDocument) => {
    setLoading(true);
    try {
      const newDocument = {
        ...document,
        createdAt: dateActual,
        status: "pendente",
        username: user?.displayName,
        uid: user?.uid,
      };

      await addDoc(collection(db, "schedules"), newDocument);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, insertDocument };
};
