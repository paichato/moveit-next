import { useEffect, useState } from 'react';
import styles from '../styles/component/Countdown.module.css';

export function Countdown(){

    const [time, settime] = useState(25*60);
    const [isActive, setIsActive] = useState(false);

    const minutes= Math.floor(time/60);
    const seconds= time % 60;

    const [minuteLeft,minuteRight]= String(minutes).padStart(2,'0').split('');
    const [secondsLeft,secondsRight]= String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    useEffect(() => {
        if(isActive && time>0){
            setTimeout(() => {
                settime(time-1);
            }, 1000);
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
            {isActive?(
                <button type="button" className={styles.countdownButon} onClick={startCountdown}>
                Iniciar um ciclo
            </button>
            ):(
                <button type="button" className={styles.countdownButon} onClick={startCountdown}>
                Iniciar um ciclo
            </button>
            )}
            
            
        </div>
    )
}