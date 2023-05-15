import { User, UserCredential } from "firebase/auth";

export interface ICreateUserWithEmail {
  displayName: string;
  displayEmail: string;
  displayPassword: string;
}

export interface IUserData {
  displayEmail: string;
  displayPassword: string;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IUser {
  uid: string;
  email: string;
  displayName: string;
}

export interface IAuthContext {
  user: IUser | null;
  error: string;
  setError: (error: string) => void;
  logout: () => void;
  useCreateUserWithEmail: (userData: ICreateUserWithEmail) => void;
  loginWithGoogle: () => Promise<User>;
  loginUserWithEmail: (userData: IUserData) => void;
  DeleteUser: () => void;
}
