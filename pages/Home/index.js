import AppLayout from "components/AppLayout";
import Request from "components/Request";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";
import { fetchLatesRequest } from "firebase/client";
import Link from "next/link";

export default function Home() {
  const [timeLine, setTimeLine] = useState([]);
  const user = useUser();
  useEffect(() => {
    user && fetchLatesRequest().then(setTimeLine);
  }, [user]);
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeLine.map((request, index) => {
            return (
              <Request
                id={index}
                key={index}
                name={request.userName}
                message={request.content}
                avatar={request.avatar}
                userId={request.userId}
                createdAt={request.createdAt}
              />
            );
          })}
        </section>
        <nav>
          <Link href="/Compose/Request">
            <a>
              <strong>crear</strong>
            </a>
          </Link>
        </nav>
      </AppLayout>

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
        }
      `}</style>
    </>
  );
}
