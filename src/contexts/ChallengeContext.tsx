import { createContext, ReactNode, useState } from "react";

interface ChallengesContextData {
  level: number;
  currentXp: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setlevel] = useState(1);
  const [currentXp, setcurrentXp] = useState(0);
  const [challengesCompleted, setchallengesCompleted] = useState(0);

  function levelUp() {
    setlevel(level + 1);
  }
  function startNewChallenge() {
    console.log("New CH");
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXp,
        startNewChallenge,
        challengesCompleted,
        levelUp,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
