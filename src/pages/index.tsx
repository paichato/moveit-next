
import { ToastContainer } from "react-toastify";
import { Hero } from "../components/Hero";
import {  LogginProvider } from "../contexts/LogginContext";


import "react-toastify/dist/ReactToastify.css";


export default function Login() {


    

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
