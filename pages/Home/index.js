import Request from "components/Request";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";
import { listenLatesRequest } from "firebase/client";
import Link from "next/link";
import Created from "components/Icons/create";
import HomeIcon from "components/Icons/home";
import UserIcon from "components/Icons/user";
import { colors } from "styles/theme";
import Head from "next/head";

export default function Home() {
  const [timeLine, setTimeLine] = useState([]);
  const user = useUser();
  useEffect(() => {
    let unsuscribe;
    if (user) {
      unsuscribe = listenLatesRequest(setTimeLine);
    }
    return () => unsuscribe && unsuscribe();

    //user && fetchLatesRequest().then(setTimeLine);
  }, [user]);
  return (
    <>
      <Head>
        <title>Home / Minca</title>
      </Head>
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeLine.map((request, index) => {
          return (
            <Request
              id={request.id}
              key={index}
              name={request.userName}
              message={request.content}
              avatar={request.avatar}
              userId={request.userId}
              createdAt={request.createdAt}
              img={request.img}
            />
          );
        })}
      </section>
      <nav>
        <Link href="/Home">
          <a>
            <HomeIcon height={25} width={25} />
          </a>
        </Link>
        <Link href="/Compose/Request">
          <a>
            <Created height={25} width={25} />
          </a>
        </Link>
        <Link href="/Compose/Request">
          <a>
            <UserIcon height={25} width={25} />
          </a>
        </Link>
      </nav>

      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #eee;
          height: 49px;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          position: sticky;
          display: flex;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 23px;
          font-weight: 800;
          padding-left: 15px;
        }

        section {
          flex: 1;
        }

        nav {
          bottom: 0;
          background: #fff;
          position: sticky;
          border-top: 1px solid #eee;
          height: 49px;
          width: 100%;
          display: flex;
        }

        nav a {
          display: flex;
          flex: 1 1 auto;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        nav a:hover {
          background: radial-gradient(#f5866e44 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }

        nav a :hover > :global(svg) {
          stroke: ${colors.fourd};
        }
      `}</style>
    </>
  );
}
