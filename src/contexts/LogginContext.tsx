import { HookCallbacks } from "async_hooks";
import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { genUser } from "../components/Hero";


interface LogginContextData {
  isLogged: boolean;
  fazerLogin: () => void;
 
  // guest:userProps;
  setDadosUser:(u)=>void;
}

interface LogginProviderProps {
  children: ReactNode;
  
}

interface userProps {
  login: string;
  avatar_url: string;
  name: string;
}

export let user:userProps={login:"",avatar_url:"",name:""};

export const guest:userProps= {
  login: "guest",
  avatar_url:
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg",
  name: "guest user",
};


export const LogginContext = createContext({} as LogginContextData);

export function LogginProvider({ children }: LogginProviderProps) {
  
 
  const [isLogged, setisLogged] = useState(false);
  // const [user, setuser] = useState({login:"",avatar_url:"",name:""});
  const [userData, setuserData] = useState(user)

useEffect(() => {
  
      // Cookies.set("user", {name:user.name, login:user.login, avatar:user.avatar_url})
        if(user.login !=""){
      Cookies.set("name", String(user.name));
    Cookies.set("login", String(user.login));
    Cookies.set("avatar",String(user.avatar_url));
    console.log(Cookies.get('avatar'));
        }
 
 
}, [user])

  function fazerLogin() {
    
      setisLogged(true);

  }
  function setDadosUser(u:userProps){
   user=u;     
  }

  

  return (
    <LogginContext.Provider value={{
      isLogged,
      fazerLogin,
      
      setDadosUser,
      
       }}>
      {children}
    </LogginContext.Provider>
  );
}
