import CreatedServices from "components/CreatedServices";
import { useEffect, useState } from "react";
import Link from "next/link";
import Created from "components/Icons/create";
import HomeIcon from "components/Icons/home";
import UserIcon from "components/Icons/user";
import Head from "next/head";
import homeStyles from "./style";
import Modal from "react-modal";
import CreatedServicesPage from "pages/status/CreatedServices";
import { useForm } from "react-hook-form";
import UsersIcon from "components/Icons/users";
import useUser from "hooks/useUser";
import {
  addCreatedServices,
  getListUsers,
  listenLatesCreatedServices,
} from "firebase/client";

export default function Home() {
  const { register, handleSubmit, watch, errors } = useForm();
  //campos para crear un servicio
  const [timeLine, setTimeLine] = useState([]);
  const [idSelect, setIdSelect] = useState([]);
  const [modal, setModal] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const user = useUser();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  useEffect(() => {
    let unsuscribe;
    let unsuscribeListUsers;
    if (user) {
      unsuscribe = listenLatesCreatedServices(setTimeLine);
      unsuscribeListUsers = getListUsers(setListUsers);
    }
    return () => {
      unsuscribe && unsuscribe();
      unsuscribeListUsers && unsuscribeListUsers();
    };

    //user && fetchLatesRequest().then(setTimeLine);
  }, [user]);
  const handlerRequestClick = (request) => {
    console.log(request);
    setIdSelect(request);
  };

  const handleModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const handleCheck = () => {
    document
      .querySelectorAll("[type=radio]")
      .forEach((x) => (x.checked = false));
  };

  const handleCreatedService = (e) => {
    e.preventDefault();
    addCreatedServices({
      userId: user.id,
      userName: user.username,
      avatar: user.avatar,
      description: "algun detalle",
      servisId: [
        "tgny76n7gsdy77d",
        "gha7d7dhad8d7aysd7",
        "haudad78hndayd5r4avdhj",
      ],
      value: 80000,
      mileage: 1000,
      patinetaId: "gyg23yed7jjbhd3dd5jdf",
    });
    setModal(!modal);
  };

  console.log(timeLine);

  return (
    <>
      <Head>
        <title>Home / Minca</title>
      </Head>
      <Modal
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
        <div className="divTitleModal">
          <h2 className="titleModal">Crear Servicio</h2>
          <button onClick={() => setModal(!modal)} className="spanModal">
            X
          </button>
        </div>
        <section className="sectionModal">
          <article className="articleModal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <article className="articleFormLeft">
                <label>Usuario</label>
                <select>
                  {listUsers.map((users, index) => {
                    return <option key={index}>{users.name}</option>;
                  })}
                  <option>User 1</option>
                  <option>User 2</option>
                </select>
              </article>
              <article className="articleFormLeft">
                <label>Patineta</label>
                <select>
                  <option>Patineta 1</option>
                  <option>Patineta 2</option>
                </select>
              </article>
              <article className="articleFormLeftRadio">
                <div className="divServices">
                  <label>Servicios</label>
                  <br />
                  <label for="s1">
                    <input type="radio" value="servicio 1" id="s1" />{" "}
                    Mantenimiento
                  </label>
                  <br />
                  <label for="s2">
                    <input type="radio" value="servicio 2" id="s2" /> Cambio de
                    frenos
                  </label>
                  <br />
                  <label for="s3">
                    <input type="radio" value="servicio 3" id="s3" /> Cambio de
                    bateria
                  </label>
                  <br />
                  <label for="s4">
                    <input type="radio" value="servicio 4" id="s4" /> Cambio de
                    motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="radio" value="servicio 4" id="s4" /> Cambio de
                    motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="radio" value="servicio 4" id="s4" /> Cambio de
                    motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="radio" value="servicio 4" id="s4" /> Cambio de
                    motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="radio" value="servicio 4" id="s4" /> Cambio de
                    motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="radio" value="servicio 4" id="s4" /> Cambio de
                    motor
                  </label>
                  <br />
                </div>
                <div className="divButtonServices">
                  <button onClick={handleCheck}>Borrar Seleccion</button>
                </div>
              </article>
              <article className="articleMileage">
                <label>Ultimo kilometraje</label>
                <input type="text" id="mile" />
              </article>
              <article className="articleFormLeft">
                <textarea placeholder="Detalle" wrap="hard"></textarea>
              </article>
              <article className="articleFormButton">
                <button onClick={handleCreatedService}>Enviar Servicio</button>
              </article>
            </form>
          </article>
          <article className="articleModalImg">
            <img
              src="https://i.linio.com/p/d1444cdd74e52975d2260f7cb93b2d75-zoom.jpg"
              alt="Patineta Minca"
              height={350}
              width={350}
            />
          </article>
        </section>
      </Modal>
      <header>
        <h2>Inicio</h2>
      </header>
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

      <nav>
        <Link href="/Home">
          <a>
            <HomeIcon height={25} width={25} />
            <p>Inicio</p>
          </a>
        </Link>
        <a onClick={handleModal}>
          <Created height={25} width={25} />
          <p>Nuevo</p>
        </a>
        <Link href="/Compose/Request">
          <a>
            <UsersIcon height={25} width={25} />
            <p>Usuarios</p>
          </a>
        </Link>
        <Link href="/Compose/Request">
          <a>
            <UserIcon height={25} width={25} />
            <p>Admin</p>
          </a>
        </Link>
      </nav>
      <style jsx>{homeStyles}</style>
    </>
  );
}
