import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export const deleteDocument = async (id: string) => {
  try {
    await deleteDoc(doc(db, "schedules", id));
  } catch (error) {
    console.log(error);
  }
};
