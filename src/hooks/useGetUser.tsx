import { getAuth } from "firebase/auth";

interface IUser {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  emailVerified: boolean | null;
  uid: string | null;
}

export const getUser = () => {
  const auth = getAuth();

  if (!auth.currentUser) return null;

  const user: IUser = auth.currentUser;

  return user;
};
