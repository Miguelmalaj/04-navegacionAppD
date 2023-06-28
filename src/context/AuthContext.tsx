

// Definir como luce, que información tendré aquí
import React, { useReducer } from 'react'
import { createContext } from "react";
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Lo usaremos para decirle a React como luce y qué expone el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (username: string) => void;
}

//Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );


//Componente proveedor del estado

export const AuthProvider = ({ children } : { children: JSX.Element }) => { //any

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return (
        <AuthContext.Provider  value={{
            authState: authState,   //authInitialState,
            signIn: signIn,          //() => {}
            changeFavoriteIcon,
            logout,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}