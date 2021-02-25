import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json';

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
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setlevel] = useState(1);
  const [currentXp, setcurrentXp] = useState(0);
  const [challengesCompleted, setchallengesCompleted] = useState(0);
  const [activeChallenge, setactiveChallenge] = useState(null);

  const xpToNextLevel=Math.pow((level+1)*4, 2);

  function levelUp() {
    setlevel(level + 1);
  }
  function startNewChallenge() {
    const randomChallengeIndex=Math.floor(Math.random()*challenges.length);
    const challenge=challenges[randomChallengeIndex];
    setactiveChallenge(challenge);
  }

  function resetChallenge(){
      setactiveChallenge(null);
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
        xpToNextLevel
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
