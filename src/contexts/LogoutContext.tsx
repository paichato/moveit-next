import { createContext, ReactNode, useState } from "react";
import { LogoutModal } from "../components/LogoutModal";

interface LogoutContextData{
    show:boolean;
    mostrar:()=>void;
    fechar:()=>void;
}

interface LogoutProviderProps{
    children:ReactNode;
}

export const LogoutContext=createContext({} as LogoutContextData)

export function LogoutProvider({children}:LogoutProviderProps){
    const [show, setshow] = useState(false)
    
    function mostrar(){
        setshow(true);
    }

    function fechar(){
        setshow(false);
    }
    
    
    return(
        <LogoutContext.Provider value={{
            mostrar,
            show,
            fechar

        }

        }>{children}
        {show && <LogoutModal/>}

        </LogoutContext.Provider>
    )
}