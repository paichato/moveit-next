import Head from "next/head";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { LogginContext, LogginProvider, user } from "../contexts/LogginContext";
import styles from "../styles/component/Profile.module.css";
import Cookies from "js-cookie";
import { genUser } from "./Hero";
import { GetServerSideProps } from "next";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <LogginProvider >
      <div className={styles.profileContainer}>
        {/* <img src={Cookies.get('name')!=""?Cookies.get('avatar'):guest.avatar_url} alt="Marlon D Jesus"/> */}
        <img src={`https://github.com/${Cookies.get('login')}.png`} alt="Marlon D Jesus" />
        <div>
          {/* <strong>{Cookies.getJSON('name')!==undefined?Cookies.getJSON('name'):guest.name}</strong> */}
          <strong>{Cookies.get("name")}</strong>
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
