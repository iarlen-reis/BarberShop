import React, { createContext, useContext, useEffect, useState } from "react";

import {
  User,
  onAuthStateChanged,
  signOut,
  getAuth,
  deleteUser,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

import { app } from "../services/firebase";

import {
    IAuthContext,
    ICreateUserWithEmail, 
    IUserData,
    IChildren
} from '../interfaces/AuthContext'

import Loading from "../components/Loading/Loading";

const AuthContext = createContext<IAuthContext>({
  user: null,
  error: '',
  logout: async () => ({}),
  useCreateUserWithEmail: () => ({}),
  loginWithGoogle: () => Promise.resolve({} as User),
  loginUserWithEmail: async () => {
    throw new Error("AuthContext não foi inicializado corretamente.");
  },
  DeleteUser: () => ({}),
  
  });

export const AuthProvider = ({ children }: IChildren) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("")

  // check if the user is logged in.
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      });
      return unsubscribe;
  }, [auth]);

  // creates a new user using email and password.
  const useCreateUserWithEmail = async (userData: ICreateUserWithEmail) => {
    try {
      setError("")
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userData.displayEmail,
        userData.displayPassword,
      );

      await updateProfile(user, { displayName: userData.displayName });

      return;
      } catch (error: any) {
      error.message.includes('email-already')
        ? setError("E-mail já em uso.") 
        : setError('Ocorreu um error, tente mais tarde.')
     }
  };

  // login with google.
  const loginWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      const user = await signInWithPopup(auth, provider);

      return user.user
  };

  // login using email.
  const loginUserWithEmail = async (data: IUserData) => {
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            data.displayEmail,
            data.displayPassword,
          ) as UserCredential;
    
          return user
    } catch (error) {
        console.log(error);
        throw error;
    }
  };

  const DeleteUser = async () => {
    try {
        if(!auth.currentUser) return;

        await deleteUser(auth.currentUser);
    } catch (error) {
        console.log(error)
    }
  }
  
  // logout user.
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{ 
        user,
        error,
        logout,
        useCreateUserWithEmail,
        loginWithGoogle,
        loginUserWithEmail,
        DeleteUser,
     }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
