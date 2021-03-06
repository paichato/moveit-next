import {GiExitDoor, GiCancel} from 'react-icons/gi';
import styles from '../styles/component/LogoutModal.module.css'


export function LogoutModal(){
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>Sair</header>
                <strong>Tem certeza que deseja sair?</strong>
                <section>
                <button><GiExitDoor/></button>
                <button><GiCancel/></button>
                </section>
            </div>
        </div>
    )
}