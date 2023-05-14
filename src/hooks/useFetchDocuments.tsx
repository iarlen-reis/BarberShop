import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../services/firebase";

import {ISchedule, IUserDocuments} from '../interfaces/useFetchDocuments'

import { useAuthContext } from "../context/AuthContext";

export const getUserDocuments = (): IUserDocuments => {
  const [schedules, setSchedules] = useState<ISchedule[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useAuthContext();

  useEffect(() => {
    const getDocuments = async () => {
      setLoading(true);
      try {
        const collectionRef = collection(db, "schedules");

        const queryDb = query(
          collectionRef,
          where("uid", "==", user?.uid),
          orderBy("scheduledDate", "asc")
        );

        onSnapshot(queryDb, (QuerySnapshot) => {
          setSchedules(
            QuerySnapshot.docs.map(
              (doc) =>
                ({
                  id: doc.id,
                  ...doc.data(),
                } as ISchedule)
            )
          );
        });
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    };
    getDocuments();
  }, [user?.uid]);

  return { loading, schedules };
};
