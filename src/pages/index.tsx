import { useRouter } from "next/router";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Hero } from "../components/Hero";
import {  LogginContext, LogginProvider } from "../contexts/LogginContext";


import "react-toastify/dist/ReactToastify.css";


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
