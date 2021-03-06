import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Hero } from "../../components/Hero";
import { guest, LogginContext, LogginProvider } from "../../contexts/LogginContext";
import Cookies from 'js-cookie';

import "react-toastify/dist/ReactToastify.css";
import { GetServerSideProps } from "next";

export default function Login() {

    const {isLogged}=useContext(LogginContext);
    const router=useRouter();

    

  return(
      <>
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      <LogginProvider >
         <Hero />
     </LogginProvider>
  </>
  )
}


// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const { name, avatar, login } = ctx.req.cookies;
  
//     return {
//         props:{
//             avatar:String(avatar),
//             name:String(name),
//             login:String(login)
//         }
//     }
// }

// if(user !==undefined || !""){
//     if(user==guest){
//       Cookies.set("user", {name:guest.name, login:guest.login, avatar:guest.avatar_url})
//     // Cookies.set("name", String(guest.name));
//     // Cookies.set("login", String(guest.login));
//     // Cookies.set("avatar", String(guest.avatar_url));

    
//  }
//     }else{
//       Cookies.set("user", {name:user.name, login:user.login, avatar:user.avatar_url})
//     // Cookies.set("name", String(user.name));
//     // Cookies.set("login", String(user.login));
//     // Cookies.set("avatar",String(user.avatar_url));
//  }