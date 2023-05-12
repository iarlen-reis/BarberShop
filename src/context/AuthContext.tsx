import React, { createContext, useContext, useEffect, useState } from "react";

import {
  User,
  onAuthStateChanged,
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { app } from "../services/firebase";

import Loading from "../components/Loading/Loading";

interface IUser {
  user: User | null;
  logout: () => void;
  useCreateUserWithEmail: (userData: ICreateUserWithEmail) => void;
}

interface IChildren {
  children: React.ReactNode;
}

interface ICreateUserWithEmail {
  displayName: string;
  displayEmail: string;
  displayPassword: string;
}

const AuthContext = createContext<IUser>({
  user: null,
  logout: async () => ({}),
  useCreateUserWithEmail: () => ({}),
});

export const AuthProvider = ({ children }: IChildren) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  const useCreateUserWithEmail = async (userData: ICreateUserWithEmail) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userData.displayEmail,
        userData.displayPassword,
      );

      await updateProfile(user, { displayName: userData.displayName });
    } catch (error) {
      console.log(error);
    }
  };

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
    <AuthContext.Provider value={{ user, logout, useCreateUserWithEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
