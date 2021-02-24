import Head from "next/head";
import styles from '../styles/component/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/paichato.png" alt="Marlon D Jesus"/>
            <div>
                <strong>Marlon D Jesus</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}