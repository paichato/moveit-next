import styles from '../styles/component/Hero.module.css';
import {BsBoxArrowInRight} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

export function Hero(){
    return(
        <div className={styles.container} >
            <img src="movit-hero-bg.png" alt="background moveit"/>
            <div>
                <img src="Moveit-bg.png" alt="" />
                <h3>Bem vindo</h3>
                <div className={styles.git}>
                    <AiFillGithub className={styles.icon}/>
                <p>Coloque o seu  nome do github  ou 
um nome aleatorio</p>
                </div>
                
                <section>
                    <input type="text" name="username" id=""/>
                    <button><BsBoxArrowInRight className={styles.icon}/></button>
                </section>
                

            </div>
        </div>
    )
}