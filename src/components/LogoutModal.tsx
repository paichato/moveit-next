import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import {GiExitDoor, GiCancel} from 'react-icons/gi';
import { LogoutContext } from '../contexts/LogoutContext';
import styles from '../styles/component/LogoutModal.module.css'


export function LogoutModal(){

    const {show, mostrar, fechar} =useContext(LogoutContext);

    const router = useRouter();

    async function handleExit(){
        fechar();
        Cookies.remove('name');
        Cookies.remove('avatar');
        Cookies.remove('login');
        Cookies.remove('level');
        Cookies.remove('currentXp');
        Cookies.remove('challengesCompleted'); 

        router.push('/');
    }

    // function handleCancel(){
    //     setshow(!show);
    // }

   

    return(
        <div className={styles.overlay}>
            <div className={styles.Logcontainer}>
                <header>Sair</header>
                <strong>Tem certeza que deseja sair?</strong>
                <section>
                <button onClick={handleExit} ><GiExitDoor/></button>
                <button onClick={fechar}><GiCancel/></button>
                </section>
            </div>
        </div>
    )
}