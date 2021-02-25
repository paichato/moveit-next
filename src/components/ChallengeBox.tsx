import styles from '../styles/component/ChallengeBox.module.css';

export function ChallengeBox(){
const hasActiveChallenge=true;

return(
    <div className={styles.challengeBoxContainer}>
        {hasActiveChallenge?(
            <div className={styles.challengesActive}>
                <header>Ganhe 400 xp</header>
                <main>
                    <img src="icons/body.svg" alt="Body"/>
                    <strong>Novo desafio</strong>
                    <p>Levante e faca uma caminhada de 3 minutos</p>
                </main>
                <footer>
                    <button type="button" className={styles.challengeFailedButton}>Falhei</button>
                    <button type="button" className={styles.challengeSucceededButton}>Completei</button>
                </footer>
            </div>
        ):(
            
            <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio </strong>
            <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Avance de level completando desafios.
            </p>
        </div>
            
        )}

        
    </div>
)
}