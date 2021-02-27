import Head from "next/head";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from '../styles/component/Profile.module.css'

export function Profile(){

    const {level}=useContext(ChallengesContext);


    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/paichato.png" alt="Marlon D Jesus"/>
            <div>
                <strong>Marlon D Jesus</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}</p>
            </div>
        </div>
    )
}