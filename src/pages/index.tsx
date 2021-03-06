
import { ToastContainer } from "react-toastify";
import { Hero } from "../components/Hero";
import {  LogginContext, LogginProvider } from "../contexts/LogginContext";


import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";



export default function Login() {
  const router=useRouter();
  const {isLogged}= useContext(LogginContext);

useEffect(() => {



  
}, [])
    

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
