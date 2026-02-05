import { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void; 
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface UsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoProvider = ({ children } : UsuarioLogadoProviderProps) => {
    const handleLogout = useCallback(() => { 
        console.log('Logout executou')
    },[]);

    return(
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario:'Luan',logout:handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};  