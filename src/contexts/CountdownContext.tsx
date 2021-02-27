import { Children, createContext, ReactNode, useContext } from "react";




interface CountdownContextData{

}

interface CountdownProviderProps{
    children:ReactNode;
}

const CountdownContext=createContext({} as CountdownContextData);

export function CountdownProvide({children}:CountdownProviderProps){
    return(
        <CountdownContext.Provider value={{}}>
            {children}
        </CountdownContext.Provider>
    )
}