import styles from "../styles/component/Sidebar.module.css";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LogoutContext } from "../contexts/LogoutContext";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import {FaHourglassStart} from 'react-icons/fa'

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
            <MenuItem  icon={<FaHourglassStart/> } style={{ color:"darkgoldenrod"}}>6 Seg</MenuItem>
            <MenuItem icon={<FaHourglassStart/>} style={{ color:"var(--blue)"}}>25 min</MenuItem>
            <MenuItem icon={<FaHourglassStart/>}style={{ color:"var(--title)"}}>1 hora</MenuItem>
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
