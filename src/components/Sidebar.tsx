import styles from "../styles/component/Sidebar.module.css";
import { BiArrowBack, BiCommentX } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { LogoutContext } from "../contexts/LogoutContext";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import { FaHourglassStart } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { BiShare } from "react-icons/bi";
import { VscColorMode } from "react-icons/vsc";
import { GiClockwork } from "react-icons/gi";
import {
  AiOutlineCloudUpload,
  AiOutlineDownload,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";
import { CountdownContext } from "../contexts/CountdownContext";
import axios from "axios";
import Cookies from "js-cookie";
import { fullUser } from "../pages/moveit";
import { GetServerSideProps } from "next";
import { LogginContext, user } from "../contexts/LogginContext";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// {
//   login: "",
//   avatar: "",
//   name: "",
//   level: 0,
//   challengeCompleted: 0,
//   currentXp: 0,
// }

interface fullUserData {
  login: String;
  avatar: String;
  name: String;
  level: number;
  challengeCompleted: number;
  currentXp: number;
}

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        fontFamily: "Inter",
        color: props.colorMode === "dark" ? "white" : "var(--text)",
        background: props.colorMode === "dark" ? "white" : "var(--background)",
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "var(--white)",
      },
      svg: {
        fill: "var(--white)",
      },
    }),
  },
});

export function Sidebar() {
  const router = useRouter();
  const { show, mostrar } = useContext(LogoutContext);
  const { setCTime } = useContext(CountdownContext);
  const { level, challengesCompleted, currentXp } = useContext(
    ChallengesContext
  );
  const {userData} = useContext(LogginContext);

  useEffect(() => {}, [setCTime]);

  function handleLogout() {
    //prompt confirmation modal
    //if yes -> remove cookies && router.push('/')
    //if no -> close modal
    mostrar();
    console.log("logout");
  }

  function handleConfig(e: React.FormEvent<HTMLButtonElement>) {
    //prompt config modal to choose time
    //if choosen switch time
    console.log(e.currentTarget.value);

    setCTime(Number(e.currentTarget.value));

    // (e: React.FormEvent<HTMLInputElement>) => {
    //     setinput(e.currentTarget.value)}
  }

  function handleShare() {
    //prompt option to save data into pdf
    //|| share score to social media
    //
    const fullUser: fullUserData = {
      name: userData.name,
      avatar: userData.avatar_url,
      login: userData.login,
      challengeCompleted: challengesCompleted,
      currentXp: currentXp,
      level: level,
    };
    console.log(fullUser);

    axios.post("/api/save", { user: fullUser }).then(function(response){
      
      toast.success("✅ Dados Salvados", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.container}>
        <button onClick={handleLogout}>
          <BiArrowBack />
        </button>
        <ChakraProvider theme={theme}>
          <button style={{ background: "var(--blue)" }}>
            <Menu isLazy placement="left">
              <MenuButton
                as={Button}
                style={{
                  background: "var(--blue)",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <IoMdOptions />
              </MenuButton>
              <MenuList
                style={{
                  background: "var(--white)",
                  boxShadow: "0 0 20px rgba(0,0,200,0.2)",
                  outline: "none",
                  border: "none",
                }}
              >
                <MenuItem
                  role="menuitemradio"
                  value={0}
                  onClick={handleConfig}
                  icon={
                    <FaHourglassStart style={{ fill: "var(--blue-dark)" }} />
                  }
                  style={{ color: "var(--title)", fontWeight: "bolder" }}
                >
                  DEMO - 5 s
                </MenuItem>
                <MenuDivider style={{ color: "var(--gray-line)" }} />
                <MenuItem
                  value={1}
                  onClick={handleConfig}
                  icon={<BsClockHistory style={{ fill: "var(--blue-dark)" }} />}
                  style={{ color: "var(--title)", fontWeight: "bolder" }}
                >
                  POMODORO- 25 m
                </MenuItem>
                <MenuDivider style={{ color: "var(--gray-line)" }} />
                <MenuItem
                  value={2}
                  onClick={handleConfig}
                  icon={<GiClockwork style={{ fill: "var(--blue-dark)" }} />}
                  style={{ color: "var(--title)", fontWeight: "bolder" }}
                >
                  ADVANCED- 1 h
                </MenuItem>
              </MenuList>
            </Menu>
          </button>
          {/* //back to business.. for sure */}

          <button style={{ background: "var(--blue)" }}>
            <Menu isLazy placement="left">
              <MenuButton
                as={Button}
                style={{
                  background: "var(--blue)",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <BiShare />
              </MenuButton>
              <MenuList
                style={{
                  background: "var(--white)",
                  boxShadow: "0 0 20px rgba(0,0,200,0.2)",
                  outline: "none",
                  border: "none",
                }}
              >
                <MenuItem
                  role="menuitemradio"
                  value={0}
                  onClick={handleShare}
                  icon={
                    <AiOutlineCloudUpload
                      style={{ fill: "var(--blue-dark)" }}
                    />
                  }
                  style={{ color: "var(--title)", fontWeight: "bolder" }}
                >
                  Save Data
                </MenuItem>
                <MenuDivider style={{ color: "var(--gray-line)" }} />
                <MenuItem
                  value={1}
                  onClick={handleConfig}
                  icon={
                    <AiOutlineDownload style={{ fill: "var(--blue-dark)" }} />
                  }
                  style={{ color: "var(--title)", fontWeight: "bolder" }}
                >
                  Download Data
                </MenuItem>
                <MenuDivider style={{ color: "var(--gray-line)" }} />
                <MenuItem
                  value={2}
                  onClick={handleConfig}
                  icon={
                    <AiOutlineShareAlt style={{ fill: "var(--blue-dark)" }} />
                  }
                  style={{ color: "var(--title)", fontWeight: "bolder" }}
                >
                  Share on Twitter
                </MenuItem>
              </MenuList>
            </Menu>
          </button>
        </ChakraProvider>
        <button style={{ fill: "var(--title)" }}>
          <VscColorMode />
        </button>
      </div>
    </>
  );
}
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { level, currentXp, challengesCompleted, login, name, avatar } = ctx.req.cookies;

//   return {
//     props: {
//       level: Number(level),
//       currentXp: Number(currentXp),
//       challengesCompleted: Number(challengesCompleted),
//       login: login,
//       name: name,
//       avatar:avatar

//     },
//   };
// };
