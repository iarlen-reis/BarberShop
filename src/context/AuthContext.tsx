import { User, onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { app } from "../services/firebase";
import Loading from "../components/Loading/Loading";

interface IUser {
  user: User | null;
  logout: () => void;
}

interface IChildren {
  children: React.ReactNode;
}

const AuthContext = createContext<IUser>({
  user: null,
  logout: async () => ({}),
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
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
