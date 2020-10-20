import AdminStyle from "./style";
import Head from "next/head";
import Button from "components/buttonAdmin";
import Patineta from "components/Icons/patineta";
import Employees from "components/Icons/employees";
import Tools from "components/Icons/tools";
import { useEffect, useState } from "react";
import CreatedServices from "components/createdServices";
import useUser from "hooks/useUser";
import {
  listenLatesCreatedEmployes,
  listenLatesCreatedScooter,
  listenLatesCreatedServices,
} from "firebase/client";
import Plus from "components/Icons/plus";
import WaitSelect from "components/imgSelect/waitSelect";
import CreatedScooter from "components/createdScooter";
import CreatedEmployes from "components/createdEmployes";
import WaitDetails from "components/waitDetails";

export default function AdminPage(props) {
  const [timeLineServices, setTimeLineServices] = useState([]);
  const [timeLineScooter, setTimeLineScooter] = useState([]);
  const [timeLineEmployes, setTimeLineEmployes] = useState([]);
  const [name, setName] = useState("Servicios");
  const user = useUser();
  useEffect(() => {
    let unsuscribeServis;
    let unsuscribeScooter;
    let unsuscribeEmployes;
    if (user) {
      unsuscribeServis = listenLatesCreatedServices(setTimeLineServices);
      unsuscribeScooter = listenLatesCreatedScooter(setTimeLineScooter);
      unsuscribeEmployes = listenLatesCreatedEmployes(setTimeLineEmployes);
    }
    return () => {
      unsuscribeServis && unsuscribeServis();
      unsuscribeScooter && unsuscribeScooter();
      unsuscribeEmployes && unsuscribeEmployes();
    };
  }, [user]);

  const handlerSelect = (nameSelect) => {
    console.log(nameSelect);
    setName(nameSelect);
  };
  console.log(timeLineServices);
  console.log(timeLineScooter);
  console.log(timeLineEmployes);

  return (
    <>
      <Head>
        <title>Administrador Minca</title>
      </Head>
      <section className="sectionAdmin">
        <article className="articleLeft">
          <header>
            <h3>{props.name}</h3>
            <div>
              <img src={props.avatar} alt="foto" className="imgAvatar" />
            </div>
          </header>
          <div className="botones">
            <Button color="#00FF7F" onClick={() => handlerSelect("Servicios")}>
              <Tools height={35} width={35} fill="white" />
              Servicios
            </Button>
            <Button color="#FF1493" onClick={() => handlerSelect("Patinetas")}>
              <Patineta height={35} width={35} fill="white" />
              Patinetas
            </Button>
            <Button color="#8A2BE2" onClick={() => handlerSelect("Empleados")}>
              <Employees height={35} width={35} fill="white" />
              Empleados
            </Button>
          </div>
        </article>
        <article className="artiServis">
          <div className="headerList">
            <p>{name}</p>
            <button className="buttonPlus">
              <div>
                <Plus height={40} width={40} />
              </div>
              <p>Nuevo</p>
            </button>
          </div>
          {name === "Servicios"
            ? timeLineServices.map((servis) => {
                return (
                  <CreatedServices
                    id={servis.id}
                    name={servis.name}
                    value={servis.value}
                    garantia={servis.garantia}
                  />
                );
              })
            : name === "Patinetas"
            ? timeLineScooter.map((scooter) => {
                return (
                  <CreatedScooter
                    id={scooter.id}
                    name={scooter.name}
                    power={scooter.power}
                  />
                );
              })
            : timeLineEmployes.map((employee) => {
                return (
                  <CreatedEmployes
                    id={employee.id}
                    name={employee.name}
                    specialty={employee.specialty}
                  />
                );
              })}
        </article>
        <WaitDetails height={350} width={300} subTitle={true} />
      </section>
      <style jsx>{AdminStyle}</style>
    </>
  );
}

AdminPage.getInitialProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const apiResponse = await fetch(
    `http://localhost:3000/api/adminProfile/${id}`
  );
  if (apiResponse.ok) return apiResponse.json();
  if (res) {
    res.writeHead(301, { Location: "/Home" }).end();
  }
};
