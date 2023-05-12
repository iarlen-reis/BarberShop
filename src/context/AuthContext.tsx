import React, { createContext, useContext, useEffect, useState } from "react";

import {
  User,
  onAuthStateChanged,
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

import { app } from "../services/firebase";

import Loading from "../components/Loading/Loading";

interface IAuthContext {
  user: User | null;
  logout: () => void;
  useCreateUserWithEmail: (userData: ICreateUserWithEmail) => void;
  loginWithGoogle: () => Promise<User>;
  loginUserWithEmail: (
    userData: IUserData
  ) => Promise<UserCredential>
}

interface IChildren {
  children: React.ReactNode;
}

interface ICreateUserWithEmail {
  displayName: string;
  displayEmail: string;
  displayPassword: string;
}

interface IUserData {
    displayEmail: string;
    displayPassword: string;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  logout: async () => ({}),
  useCreateUserWithEmail: () => ({}),
  loginWithGoogle: () => Promise.resolve({} as User),
  loginUserWithEmail: async () => {
    throw new Error("AuthContext não foi inicializado corretamente.");
  },

  });

export const AuthProvider = ({ children }: IChildren) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      const { user } = await createUserWithEmailAndPassword(
          auth,
          userData.displayEmail,
          userData.displayPassword,
      );

      await updateProfile(user, { displayName: userData.displayName });

      return;
      } catch (error) {
      console.log(error);
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
        logout,
        useCreateUserWithEmail,
        loginWithGoogle,
        loginUserWithEmail
     }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
