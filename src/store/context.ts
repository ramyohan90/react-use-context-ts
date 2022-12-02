import { createContext, Dispatch } from "react";

export interface AuthState {
    user: string;
    isLoggedIn: boolean;
    token: string | null;
}

export interface AuthContextState {
    data: AuthState,
    setData: Dispatch<AuthContextType>
}

export const AuthStateInit: AuthState = {
    user: 'N/A',
    isLoggedIn: false,
    token: null
}

export const AuthContextStateInit: AuthContextState = {
    data: AuthStateInit,
    setData: () => {}
}

export const AuthContext = createContext<AuthContextState>(AuthContextStateInit);

export interface AuthContextType {
    type: string;
    payload: AuthState;
}

