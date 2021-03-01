import styles from '../styles/component/LevelUpModal.module.css';

export function LevelUpModal(){
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>2</header>
                <strong>Parabens!</strong>
                <p>Voce alcançoun um novo level</p>
                <button type="button">
                    <img src="/icons/close.svg" alt="fechar modal"/>
                </button>
            </div>
        </div>
    )
}