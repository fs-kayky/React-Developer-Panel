import { createContext, useEffect, useState } from "react";
import { IUser } from "../interfaces/User";
import { ChildrenNodeType } from "../types/ChildrenTypes";
import { useAuthApi } from '../../modules/auth/services/AuthService';
import { useStorageDb } from "../hooks/useStorageDb";

type AuthType = {
    user: IUser | null;
    signIn: (username: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthType)

export const AuthProvider = ({ children }: ChildrenNodeType) => {

    const { signin } = useAuthApi()
    const { setItem, removeItem, getItem } = useStorageDb();

    const [user, setUser] = useState<IUser | null>(null);
    const storageKey = "BG-USER"

    const signIn = async (username: string) => {
        const response = await signin(username);
        if (response) {
            setUser(response);
            setItem(storageKey, JSON.stringify(response));
            return true;
        }
        return false
    }

    const logout = () => {
        setUser(null);
        removeItem(storageKey);
        removeItem('BG-TODOS');
        removeItem('BG-GALLERY');
        removeItem('BG-MOVEIT');
    }

    useEffect(() => {
        const userExist = getItem(storageKey)
        if(userExist) {
            const hasUser = JSON.parse(userExist)
            return setUser(hasUser)
        }
    }, [storageKey])

    return (
        <AuthContext.Provider value={{ user, signIn, logout }}>{children}</AuthContext.Provider>
    )
}

