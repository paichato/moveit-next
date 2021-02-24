import styles from '../styles/component/CompletedChallenges.module.css';

export function CompletedChallenges(){
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    )
}