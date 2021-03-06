import styles from "../styles/component/Sidebar.module.css";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LogoutContext } from "../contexts/LogoutContext";
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import {FaHourglassStart} from 'react-icons/fa'
import {BsClockHistory} from 'react-icons/bs';
import {GiClockwork} from 'react-icons/gi';

export function Sidebar() {
  const router = useRouter();
  const { show, mostrar } = useContext(LogoutContext);

  function handleLogout() {
    //prompt confirmation modal
    //if yes -> remove cookies && router.push('/')
    //if no -> close modal
    mostrar();
    console.log("mostrar");
  }

  function handleConfig() {
    //prompt config modal to choose time
    //if choosen switch time
  }

  function handleShare() {
    //prompt option to save data into pdf
    //|| share score to social media
    //
  }

  return (
    <>
      <div className={styles.container}>
        <button onClick={handleLogout}>
          <BiArrowBack />
        </button  >
   
   <button style={{background:"var(--blue)"}}>
        <Menu isLazy placement="left" >
          <MenuButton as={Button} style={{ background: "var(--blue)", alignItems:"center", justifyContent:"center", display:"flex" }}>
            <IoMdOptions />
          </MenuButton>
          <MenuList style={{background:"var(--white)",boxShadow:"0 0 20px rgba(0,0,200,0.2)", outline:"none", border:"none"}}>
            <MenuItem   icon={<FaHourglassStart style={{fill:"var(--blue-dark)"}}/> } style={{ color:"var(--title)", fontWeight:"bolder"}}>DEMO - 5 s</MenuItem>
            <MenuDivider style={{color:"var(--gray-line)"}}/>
            <MenuItem  icon={<BsClockHistory style={{fill:"var(--blue-dark)"}}/>} style={{ color:"var(--title)", fontWeight:"bolder"}}>POMODORO - 25 m</MenuItem>
            <MenuDivider/>
            <MenuItem icon={<GiClockwork style={{fill:"var(--blue-dark)"}}/>}style={{ color:"var(--title)", fontWeight:"bolder"}}>ADVANCED - 1 h</MenuItem>
           
          </MenuList>
        </Menu>
        </button>
        <button>
          <FiShare2 />
        </button>
      </div>
    </>
  );
}
