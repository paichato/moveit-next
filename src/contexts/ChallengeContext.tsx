import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from "../components/LevelUpModal";



interface challenge{
    type:'body'|'eye';
    description:String;
    amount:number;
}
interface ChallengesContextData {
  level: number;
  currentXp: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge:challenge;
  resetChallenge:()=>void;
  xpToNextLevel:number;
  completeChallenge:()=>void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level:number;
  currentXp:number;
  challengesCompleted:number;
}



export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setlevel] = useState(rest.level ?? 1);
  const [currentXp, setcurrentXp] = useState(rest.currentXp ?? 0);
  const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setactiveChallenge] = useState(null);

  const xpToNextLevel=Math.pow((level+1)*4, 2);

  useEffect(() => {
    Notification.requestPermission();
    
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentXp', String(currentXp));
    Cookies.set('challengesCompleted', String(challengesCompleted));
    
  }, [level,currentXp,challengesCompleted])

  function levelUp() {
    setlevel(level + 1);
  }
  function startNewChallenge() {
    const randomChallengeIndex=Math.floor(Math.random()*challenges.length);
    const challenge=challenges[randomChallengeIndex];
    setactiveChallenge(challenge);

    new Audio('/notification.mp3').play();
    if(Notification.permission==='granted'){
      new Notification('Novo desafio 🎉',{
        body: `Valendo ${challenge.amount}xp`
      })
    }
  }

  function resetChallenge(){
      setactiveChallenge(null);
  }

  function completeChallenge(){
    if(!activeChallenge){
      return;
    } 
    const {amount}=activeChallenge;

    let finalXp=currentXp + amount;

    if(finalXp >=xpToNextLevel){
      finalXp=finalXp-xpToNextLevel;
      levelUp();
    }
    setcurrentXp(finalXp);
    setactiveChallenge(null);
    setchallengesCompleted(challengesCompleted+1);

  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXp,
        startNewChallenge,
        challengesCompleted,
        levelUp,
        activeChallenge,
        resetChallenge,
        xpToNextLevel,
        completeChallenge
      }}
    >
      {children}
      <LevelUpModal/>
    </ChallengesContext.Provider>
  );
}
