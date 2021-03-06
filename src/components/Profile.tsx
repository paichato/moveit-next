
import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import {  LogginProvider} from "../contexts/LogginContext";
import styles from "../styles/component/Profile.module.css";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  // let image=`https://github.com/${Cookies.get("login")}.png`

  const [image, setimage] = useState('');
  const [uname, setuname] = useState('')

  useEffect(() => {
    setimage(`https://github.com/${Cookies.get("login")}.png`);
    setuname(Cookies.get("name"));
  }, [Cookies.set])

  return (
    <LogginProvider>
      <div className={styles.profileContainer}>
        {/* <img src={Cookies.get('name')!=""?Cookies.get('avatar'):guest.avatar_url} alt="Marlon D Jesus"/> */}
        <img
          src={image}
          alt="Marlon D Jesus"
        />
        <div>
          {/* <strong>{Cookies.getJSON('name')!==undefined?Cookies.getJSON('name'):guest.name}</strong> */}
          <strong>{uname}</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level {level}
          </p>
        </div>
      </div>
    </LogginProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = ctx.req.cookies;

  return {
    props: {
      user: String(user),
    },
  };
};
