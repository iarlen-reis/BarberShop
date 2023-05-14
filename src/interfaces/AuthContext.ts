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

export interface IAuthContext {
  user: User | null;
  error: string;
  logout: () => void;
  useCreateUserWithEmail: (userData: ICreateUserWithEmail) => void;
  loginWithGoogle: () => Promise<User>;
  loginUserWithEmail: (userData: IUserData) => Promise<UserCredential>;
  DeleteUser: () => void;
}
