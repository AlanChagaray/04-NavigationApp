import React ,{ createContext, useReducer  } from "react"
import { authReducer } from "./authReducer"

export interface AuthState {
    isLoggedIn : boolean
    userName ?: string
    favoriteIcon ?: string
}

export const authInitialState: AuthState = {
    isLoggedIn : false,
    userName: undefined,
    favoriteIcon: undefined
}

export interface AuthContextProps {
    authState: AuthState
    singIn : () => void
    singOut : () => void
    changeFavoriteIcon: (iconName: string) => void; 
    changeUserName: (userName: string) => void; 
}

export const AuthContext = createContext({} as AuthContextProps); 

export const AuthProvider = ({children}: any) =>{
    
    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const singIn = () =>{
        dispatch({
            type : 'singIn'
        })
    }
    const singOut = () =>{
        dispatch({
            type : 'singOut'
        })
    }
    
    const changeFavoriteIcon = (iconName: string) =>{
        dispatch({
            type : 'changeFavIcon', payload: iconName
        })
    }

    const changeUserName = (userName: string) =>{
        dispatch({
            type : 'changeUserName', payload: userName
        })
    }

    return(
        <AuthContext.Provider value={{
            authState,
            singIn,
            singOut,
            changeFavoriteIcon,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}