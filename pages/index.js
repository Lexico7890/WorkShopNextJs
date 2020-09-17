import Head from "next/head";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import { colors } from "../styles/theme";
import Button from "../components/button";
import GmailIcon from "../components/Icons/gmail";
import { loginWithGmail, onAuthstateChanged } from "../firebase/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthstateChanged(setUser);
  }, []);
  console.log("entro a home");
  const handleClick = () => {
    loginWithGmail()
      .then((user) => {
        const { avatar, username, email } = user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/boxTools.png" alt="Logo" />
          <h1>Minca</h1>
          <h2>Administra tu taller 🛴</h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GmailIcon fill="white" height={20} width={20} />
                Ingresar con Gmail
              </Button>
            )}
            {user && user.username && (
              <div>
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 200px;
        }

        div {
          margin-top: 8px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          font-size: 30px;
          font-weight: 750;
          color: ${colors.firt};
          margin: 0;
        }

        h2 {
          font-size: 20px;
          color: ${colors.third};
          margin: 0;
        }
      `}</style>
    </>
  );
}
