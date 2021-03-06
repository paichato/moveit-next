import { useContext} from 'react';
import styles from '../styles/component/Countdown.module.css';
import {CountdownContext} from '../contexts/CountdownContext';



export function Countdown(){
    const {hasfinished,isActive,minutes,resetCountdown,seconds,startCountdown}=useContext(CountdownContext);

    const [minuteLeft,minuteRight]= String(minutes).padStart(2,'0').split('');
    const [secondsLeft,secondsRight]= String(seconds).padStart(2,'0').split('');

    

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