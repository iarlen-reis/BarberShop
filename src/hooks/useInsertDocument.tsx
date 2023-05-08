import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { useState } from "react";

import { useAuthContext } from "../context/AuthContext";

interface IDocument {
  service: string;
  scheduledDate: string;
  description: string;
}

export const createDocument = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);

  const insertDocument = async (document: IDocument) => {
    setLoading(true);
    try {
      const newDocument = {
        ...document,
        createdAt: Timestamp.now(),
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
