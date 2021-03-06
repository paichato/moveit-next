
import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengeContext";

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasfinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
  setCTime:(value:Number)=>void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, settime] = useState(25 * 0.2);
  const [isActive, setIsActive] = useState(false);
  const [hasfinished, sethasfinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    sethasfinished(false);
    settime(25 * 60);
  }

  function setCTime(value:any){
    switch (value) {
      case 0:
        clearTimeout(countdownTimeout);
        setIsActive(false);
        sethasfinished(false);
        settime(25*0.2);
        console.log('0-0');
        break;

        case 1:
          clearTimeout(countdownTimeout);
          setIsActive(false);
          sethasfinished(false);
          settime(25*60);
          console.log('1');
          break;

        case 2:
          clearTimeout(countdownTimeout);
        setIsActive(false);
        sethasfinished(false);
        settime(60*60);
        console.log('2');
        break;
    
      default:
        break;
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        settime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      sethasfinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasfinished,
        isActive,
        startCountdown,
        resetCountdown,
        setCTime
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
