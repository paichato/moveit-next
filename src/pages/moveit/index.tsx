import { ExperienceBar } from "../../components/ExperienceBar";
import Head from "next/head";
import { Profile } from "../../components/Profile";
import styles from "../../styles/pages/Home.module.css";
import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { ChallengeBox } from "../../components/ChallengeBox";
import { CountdownProvider } from "../../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../../contexts/ChallengeContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LogginContext, LogginProvider} from "../../contexts/LogginContext";
import { useContext } from "react";

import { useRouter } from "next/router";
import { Sidebar } from "../../components/Sidebar";
import { LogoutProvider } from "../../contexts/LogoutContext";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import axios from "axios";

interface fullUserData {
  login: String;
  avatar: String;
  name: String;
  level: number;
  challengeCompleted: number;
  currentXp: number;
}
export let fullUser: fullUserData = null;
interface HomeProps {
  level: number;
  currentXp: number;
  challengesCompleted: number;
}

// const font = {
//   fonts: {font:"Inter"}

// }

// const theme= extendTheme({font})

export default function Home(props: HomeProps) {
  const { isLogged } = useContext(LogginContext);

  

  
  const router = useRouter();

  

  return (
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
      <LogginProvider>
        <ChallengesProvider
          level={props.level}
          currentXp={props.currentXp}
          challengesCompleted={props.challengesCompleted}
        >
          
       
            
        <LogoutProvider>
      
        <CountdownProvider>
          <Sidebar/>
          
          
            <div className={styles.container}>
                
                <Head>
                  <title>Inicio | move.it</title>
                </Head>

                <ExperienceBar />

                
                  <section>
                    <div>
                      <Profile />
                      <CompletedChallenges />
                      <Countdown />
                    </div>
                    <div>
                      <ChallengeBox />
                    </div>
                  </section>
                
              </div>
              </CountdownProvider>
            )
         </LogoutProvider>
        </ChallengesProvider>
        </LogginProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentXp, challengesCompleted, name, login, avatar } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesCompleted: Number(challengesCompleted),
      name: String(name),
      login: String(login),
      avatar: String(avatar)

      
    },
  };
};



// import { ExperienceBar } from "../components/ExperienceBar";
// import Head from "next/head";
// import { Profile } from "../components/Profile";
// import styles from "../styles/pages/Home.module.css";
// import { CompletedChallenges } from "../components/CompletedChallenges";
// import { Countdown } from "../components/Countdown";
// import { ChallengeBox } from "../components/ChallengeBox";
// import { CountdownProvider } from "../contexts/CountdownContext";
// import { GetServerSideProps } from "next";
// import { ChallengesProvider } from "../contexts/ChallengeContext";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { LogginContext, LogginProvider} from "../contexts/LogginContext";
// import { useContext,useState } from "react";

// import { useRouter } from "next/router";

// interface HomeProps {
//   level: number;
//   currentXp: number;
//   challengesCompleted: number;
// }

// export default function Home(props: HomeProps) {
//   const { isLogged } = useContext(LogginContext);

//   const [logado, setlogado] = useState(isLogged);

  
//   const router = useRouter();

  

//   return (
//     <>
      
//         <ChallengesProvider
//           level={props.level}
//           currentXp={props.currentXp}
//           challengesCompleted={props.challengesCompleted}
//         >
//           <ToastContainer
//             position="top-center"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//           />
       
            
        

      
       
//          <div className={styles.container}>
//             <Head>
//               <title>Inicio | move.it</title>
//             </Head>

//             <ExperienceBar />

//             <CountdownProvider>
//               <section>
//                 <div>
//                   <Profile />
//                   <CompletedChallenges />
//                   <Countdown />
//                 </div>
//                 <div>
//                   <ChallengeBox />
//                 </div>
//               </section>
//             </CountdownProvider>
//           </div>
         
//          )
//         </ChallengesProvider>
     
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { level, currentXp, challengesCompleted } = ctx.req.cookies;

//   return {
//     props: {
//       level: Number(level),
//       currentXp: Number(currentXp),
//       challengesCompleted: Number(challengesCompleted),
      
//     },
//   };
// };
