import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/component/LevelUpModal.module.css';

export function LevelUpModal(){

    const {level}= useContext(ChallengesContext);


    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabens!</strong>
                <p>Voce alcançoun um novo level</p>
                <button type="button">
                    <img src="/icons/close.svg" alt="fechar modal"/>
                </button>
            </div>
        </div>
    )
}