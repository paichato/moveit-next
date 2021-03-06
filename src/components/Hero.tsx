import styles from "../styles/component/Hero.module.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { guest, LogginContext, user } from "../contexts/LogginContext";
import  { useRouter } from "next/router";
import  Cookies  from "js-cookie";
interface userProps {
    login: string;
    avatar_url: string;
    name: string;
  }

export let genUser:userProps={login:"",avatar_url:"",name:""};

export function Hero() {
  const { isLogged, fazerLogin, setDadosUser } = useContext(LogginContext);

  const [gituser, setgituser] = useState("");
  const [input, setinput] = useState("");

    const router=useRouter();

  useEffect(() => {
    fazerLogin();

  }, [setDadosUser]);

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
        //   genUser=response.data;
        setDadosUser(response.data);

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
          console.log(Cookies.get());
         

          // logar();

          console.log(isLogged);
          
          router.replace('/');
        })
        .catch(function (error) {
          setDadosUser(guest) ;
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

          router.replace('/');
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
