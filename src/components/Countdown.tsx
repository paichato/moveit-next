import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/component/Countdown.module.css';

let countdownTimeout:NodeJS.Timeout;

export function Countdown(){
    const {startNewChallenge}= useContext(ChallengesContext);

    const [time, settime] = useState(25*0.2);
    const [isActive, setIsActive] = useState(false);
    const [hasfinished, sethasfinished] = useState(false)

    const minutes= Math.floor(time/60);
    const seconds= time % 60;

    const [minuteLeft,minuteRight]= String(minutes).padStart(2,'0').split('');
    const [secondsLeft,secondsRight]= String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        settime(25*60);
    }

    useEffect(() => {
        if(isActive && time>0){
            countdownTimeout=setTimeout(() => {
                settime(time-1);
            }, 1000);
        } else if(isActive && time===0){
            sethasfinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                
                    <div>
                        <span>{minuteLeft}</span>
                        <span>{minuteRight}</span>
                    </div>
                    <span>:</span>
                    <div>
                        <span>{secondsLeft}</span>
                        <span>{secondsRight}</span>
                    </div>
            </div>
            {hasfinished ?(
                <button disabled type="button" className={styles.countdownButon} >
                Ciclo encerrado
            </button>
            ):(
                <>
                {isActive?(
                <button type="button" className={`${styles.countdownButon} ${styles.countdownActive}`} onClick={resetCountdown}>
                Abandonar um ciclo
            </button>
            ):(
                <button type="button" className={styles.countdownButon} onClick={startCountdown}>
                Iniciar um ciclo
            </button>
            )}
                </>
            )}

            
            
            
        </div>
    )
}