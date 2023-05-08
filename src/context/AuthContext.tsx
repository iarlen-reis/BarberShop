import { User, onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { app } from "../services/firebase";


interface IUser {
  user: User | null;
  logout: () => void;
}

interface IChildren {
  children: React.ReactNode;
}

const InitialState = {
  user: {} as User | null,
  logout: () => ({}),  
};

const AuthContext = createContext<IUser>(InitialState);

export const AuthProvider = ({ children }: IChildren) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(InitialState.user);

  useEffect(() => {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) return setUser(user);
            setUser(null);
          });
    } catch (error) {
        console.log(error)
    }
  }, [auth, user]);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
