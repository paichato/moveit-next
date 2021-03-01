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

interface HomeProps{
  level:number;
  currentXp:number;
  challengesCompleted:number;

}


export default function Home(props:HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentXp={props.currentXp} challengesCompleted={props.challengesCompleted}>
    <div className={styles.container}>
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
  </div>
  </ChallengesProvider>
    
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