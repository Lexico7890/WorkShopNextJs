import CreatedServices from "components/CreatedServices";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import homeStyles from "./style";
import CreatedServicesPage from "pages/status/CreatedServices";
import { useForm } from "react-hook-form";
import Nav from "components/nav";
import useUser from "hooks/useUser";
import { listenLatesCreatedServices } from "firebase/client";

export default function Home() {
  const { register, handleSubmit, watch, errors } = useForm();
  //campos para crear un servicio
  const [timeLine, setTimeLine] = useState([]);
  const [idSelect, setIdSelect] = useState([]);

  const user = useUser();

  console.log(watch("example"));

  useEffect(() => {
    let unsuscribe;
    if (user) {
      unsuscribe = listenLatesCreatedServices(setTimeLine);
    }
    return () => {
      unsuscribe && unsuscribe();
    };

    //user && fetchLatesRequest().then(setTimeLine);
  }, [user]);
  const handlerRequestClick = (request) => {
    console.log(request);
    setIdSelect(request);
  };

  console.log(timeLine);

  return (
    <>
      <Head>
        <title>Home / Minca</title>
      </Head>
      {/*<Modal
        isOpen={modal}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(3px)",
          },
          content: {
            backgroundColor: "#fff",
            height: "75vh",
            width: "85%",
            marginTop: "5%",
            marginLeft: "3%",
            padding: "0",
            borderWidth: "0",
          },
        }}
      >
        
      </Modal>*/}
      <section className="sectionFirts">
        <article className="articleUser">
          {timeLine.map((request, index) => {
            return (
              <div onClick={() => handlerRequestClick(request)} key={index}>
                <CreatedServices
                  id={request.id}
                  key={index}
                  message={request.description}
                  createdAt={request.createdAt}
                  userName={request.userName}
                  avatar={request.avatar}
                  value={request.value}
                />
              </div>
            );
          })}
        </article>
        <article className="articleServices">
          {idSelect.length === 0 ? (
            <p>Esperando...</p>
          ) : (
            <CreatedServicesPage
              id={idSelect.id}
              name={idSelect.userName}
              message={idSelect.content}
              avatar={idSelect.avatar}
              userId={idSelect.userId}
              createdAt={idSelect.createdAt}
              img={idSelect.img}
            />
          )}
        </article>
      </section>
      <style jsx>{homeStyles}</style>
    </>
  );
}
