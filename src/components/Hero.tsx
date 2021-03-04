import styles from '../styles/component/Hero.module.css';
import {BsBoxArrowInRight} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import { useState } from 'react';

export function Hero(){

    const [gituser, setgituser] = useState(null);
    const [input, setinput] = useState("");

    function handleSubmitUser(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(input===""){
            console.log("insere username ou gitname");
        }
        // setinput(e.currentTarget.value);
        console.log("submited");
        console.log(input);

    }

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
                    <form onSubmit={handleSubmitUser}>
                        <input onChange={(e:React.FormEvent<HTMLInputElement>)=>{setinput(e.currentTarget.value)}} value={gituser} type="text" name="username" id="" className={styles.input}/>
                        <button type="submit" ><BsBoxArrowInRight className={styles.icon}/></button>
                    </form>
                </section>
                

            </div>
        </div>
    )
}