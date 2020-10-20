import CreatedRequest from "components/request/CreatedRequest";
import { useEffect, useState } from "react";
import Head from "next/head";
import homeStyles from "./style";
import CreatedRequestPage from "components/request/requestInfo";
import { useForm } from "react-hook-form";
import useUser from "hooks/useUser";
import { listenLatesCreatedRequest } from "firebase/client";
import WaitDetails from "components/waitDetails";

export default function Home() {
  const { register, handleSubmit, watch, errors } = useForm();
  //campos para crear un servicio
  const [timeLine, setTimeLine] = useState([]);
  const [idSelect, setIdSelect] = useState({});
  const [selectRequest, setSelectRequest] = useState(0);

  const user = useUser();

  //console.log(watch("example"));

  useEffect(() => {
    let unsuscribe;
    if (user) {
      unsuscribe = listenLatesCreatedRequest(setTimeLine);
    }
    return () => {
      unsuscribe && unsuscribe();
    };

    //user && fetchLatesRequest().then(setTimeLine);
  }, [user]);
  const handlerRequestClick = (request) => {
    setIdSelect(request);
    setSelectRequest(1);
    console.log(idSelect);
  };

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
                <CreatedRequest
                  id={request.id}
                  key={index}
                  description={request.description}
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
          {selectRequest === 0 ? (
            <WaitDetails height={400} width={350} />
          ) : (
            <CreatedRequestPage
              id={idSelect.id}
              name={idSelect.userName}
              description={idSelect.description}
              avatar={idSelect.avatar}
              userId={idSelect.userId}
              createdAt={idSelect.createdAt}
              value={idSelect.value}
              img={idSelect.img}
            />
          )}
        </article>
      </section>
      <style jsx>{homeStyles}</style>
    </>
  );
}
