import styles from '../styles/component/Sidebar.module.css'
import Link from 'next/link'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdOptions} from 'react-icons/io'
import {FiShare2} from 'react-icons/fi'
import { useRouter } from 'next/router'

export function Sidebar(){

    const router =useRouter();

    function handleLogout(){
        //prompt confirmation modal
        //if yes -> remove cookies && router.push('/')
        //if no -> close modal
    }

    return(
        <>
        <div className={styles.container}>
            <button><BiArrowBack/></button>
            <button style={{background:'var(--blue)'}}><IoMdOptions /></button>
            <button><FiShare2/></button>
        </div>
        </>
    )
}