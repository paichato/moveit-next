import styles from "../styles/component/Hero.module.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { LogginContext } from "../contexts/LogginContext";
import Router from "next/router";

interface userProps {
  login: string;
  avatar_url: string;
  name: string;
}

export const guest: userProps = {
  login: "guest",
  avatar_url:
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg",
  name: "guest user",
};

export let user: userProps = { login: null, avatar_url: null, name: null };

export function Hero() {
  const { isLogged, fazerLogin } = useContext(LogginContext);

  const [gituser, setgituser] = useState("");
  const [input, setinput] = useState("");

  useEffect(() => {
    fazerLogin();
    
  }, [user]);

  async function handleSubmitUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (input === "") {
      console.log("insere username ou gitname");
      toast.dark("❌ Insere username ou gitname!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setgituser(input);
      await api
        .get(`/${input}?`)
        .then(function (response) {
          user = response.data;

          toast.success("✅Usuario encontrado -> logando...", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          console.log(response.data);
          console.log(user.name);

          // logar();

          console.log(isLogged);
        })
        .catch(function (error) {
          user = guest;
          user.login = input;
          console.log(error);

          toast.error(`⚠ Entrando como ${user.login} {guest}`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          console.log(user.name);

          // logar();
          console.log(isLogged);
        })
        .then(function () {
          setinput("");
        });
    }
  }

  return (
    <div className={styles.container}>
      <img src="movit-hero-bg.png" alt="background moveit" />
      <div>
        <img src="Moveit-bg.png" alt="" />
        <h3>Bem vindo</h3>
        <div className={styles.git}>
          <AiFillGithub className={styles.icon} />
          <p>Coloque o seu nome do github ou um nome aleatorio</p>
        </div>

        <section>
          <form onSubmit={handleSubmitUser}>
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setinput(e.currentTarget.value);
              }}
              value={input}
              type="text"
              name="username"
              id=""
              className={styles.input}
            />
            <button type="submit">
              <BsBoxArrowInRight className={styles.icon} />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
