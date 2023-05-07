import { User, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

interface IUser {
  user: User;
}

interface IChildren {
    children: React.ReactNode
}

const InitialState = {
  // eslint-disable-next-line prettier/prettier
  user: {} as User,
};

const AuthContext = createContext<IUser>(InitialState);


export const AuthProvider = ({children}: IChildren) => {
    const [user, setUser] = useState(InitialState.user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
        })
    }, [auth])

    return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}