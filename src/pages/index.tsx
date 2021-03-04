import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head';
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import {GetServerSideProps} from 'next'
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { Hero,  user } from "../components/Hero";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LogginContext, LogginProvider } from "../contexts/LogginContext";
import { useContext } from "react";

interface HomeProps{
  level:number;
  currentXp:number;
  challengesCompleted:number;

}


export default function Home(props:HomeProps) {

  const { isLogged } = useContext(LogginContext);
  
  // useEffect(() => {
    
  // }, [isLogged])

  return (
    <>
    <LogginProvider  >
    <ChallengesProvider level={props.level} currentXp={props.currentXp} challengesCompleted={props.challengesCompleted}>
     
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

        {isLogged?(<div className={styles.container}>
     <Head>
       <title>
         Inicio | move.it
       </title>
       </Head> 
      
    <ExperienceBar/>

    <CountdownProvider>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
          
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </CountdownProvider>
  </div> ):(<Hero/>)}
     
  </ChallengesProvider>
  </LogginProvider>
    </>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {

 

  const {level,currentXp, challengesCompleted}=ctx.req.cookies;

  return{
    props:{
      level:Number(level),
      currentXp:Number(currentXp),
       challengesCompleted:Number(challengesCompleted)
    }
  }
}