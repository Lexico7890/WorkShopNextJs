import Head from "next/head";
import { useRouter } from "next/router";
import { colors } from "styles/theme";
import Button from "components/button";
import GmailIcon from "../components/Icons/gmail";
import { loginWithGmail } from "firebase/client";
import { useEffect } from "react";
import useUser, { USER_STATES } from "hooks/useUser";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/Home");
  });

  const handleClick = () => {
    loginWithGmail().catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <img src="/boxTools.png" alt="Logo" />
        <h1>Minca</h1>
        <h2>Administra tu taller 🛴</h2>
        <div>
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleClick}>
              <GmailIcon fill="white" height={20} width={20} />
              Ingresar con Gmail
            </Button>
          )}
          {user === USER_STATES.NOT_KNOW && (
            <img src="/spinner.gif" alt="spinner" />
          )}
        </div>
      </section>

      <style jsx>{`
        img {
          width: 200px;
        }

        div {
          margin-top: 30px;
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
          margin-top: 25px;
        }

        h2 {
          font-size: 20px;
          color: ${colors.third};
          margin: 0;
          padding-left: 15px;
        }
      `}</style>
    </>
  );
}
