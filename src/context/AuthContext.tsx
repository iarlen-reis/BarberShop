import { User, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

interface IUser {
  user: User;
  logout: () => void
}

interface IChildren {
    children: React.ReactNode
}

const InitialState = {
  // eslint-disable-next-line prettier/prettier
  user: {} as User,
  logout: () => ({})
};

const AuthContext = createContext<IUser>(InitialState);


export const AuthProvider = ({children}: IChildren) => {
    const [user, setUser] = useState(InitialState.user)

    useEffect(() => {
        console.log('REVALIDEI')
        onAuthStateChanged(auth, (user) => {
            if(user) return setUser(user)
                return setUser(InitialState.user)
            
        })
    }, [auth, user])

    const logout = async () => {
        try {
         await signOut(auth)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{user, logout}}>{children}</AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}