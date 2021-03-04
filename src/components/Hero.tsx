import styles from '../styles/component/Hero.module.css';
import {BsBoxArrowInRight} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import { useState } from 'react';
import { api } from '../api';

interface userProps{
    login:string;
    avatar_url:string;
    name:string;

}

export let user:userProps ={login:"",avatar_url:"", name:""};

export function Hero(){

    const [gituser, setgituser] = useState("");
    const [input, setinput] = useState("");
    

    async function handleSubmitUser(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        
        if(input===""){
            console.log("insere username ou gitname");
        }else{
            setgituser(input);
           await api.get(`/${gituser}?`)
                .then(function(response){
                    user=response.data;
                    console.log(response.data);
                    console.log(user.name);
                }).catch(function(error){
                    // user="guest";
                }).then(function(){
                    setinput("");
                })
        }
        // setinput(e.currentTarget.value);
       

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
                        <input onChange={(e:React.FormEvent<HTMLInputElement>)=>{setinput(e.currentTarget.value)}} value={input} type="text" name="username" id="" className={styles.input}/>
                        <button type="submit" ><BsBoxArrowInRight className={styles.icon}/></button>
                    </form>
                </section>
                

            </div>
        </div>
    )
}