import AppLayout from "components/AppLayout";
import Request from "components/Request";
import { useEffect, useState } from "react";

export default function Home() {
    const[datos, setDatos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/statuses/HomeStatuses')
        .then(res => res.json())
        .then(setDatos)
    })
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
            {
                datos.map((request, index) => {
                    return(
                        <Request
                            id={index}
                            name={request.name}
                            message={request.message}
                            avatar={request.avatar}
                        />
                    )
                })
            }
        </section>
        <nav></nav>
      </AppLayout>

      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #ccc;
          height: 49px;
          position: sticky;
          display: flex;
          top: 0;
          width: 100%;
        }

        section {
          padding-top: 48px;
        }

        nav {
          bottom: 0;
          position: sticky;
          border-top: 1px solid #ccc;
          height: 49px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
