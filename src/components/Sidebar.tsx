import styles from '../styles/component/Sidebar.module.css'
import Link from 'next/link'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdOptions} from 'react-icons/io'
import {FiShare2} from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { LogoutContext } from '../contexts/LogoutContext'

export function Sidebar(){

    const router =useRouter();
    const {show, mostrar}=useContext(LogoutContext);

    function handleLogout(){
        //prompt confirmation modal
        //if yes -> remove cookies && router.push('/')
        //if no -> close modal
        mostrar();
        console.log('mostrar');

        
    }

    function handleConfig(){
        //prompt config modal to choose time
        //if choosen switch time 
    }

    function handleShare(){
        //prompt option to save data into pdf 
        //|| share score to social media
        //
    }

    return(
        <>
        <div className={styles.container}>
            <button onClick={handleLogout}><BiArrowBack/></button>
            <button style={{background:'var(--blue)'}}><IoMdOptions /></button>
            <button><FiShare2/></button>
        </div>
        </>
    )
}