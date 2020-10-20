import createdRequestStyle from "./style";
import { useState, useEffect } from "react";
import useUser from "hooks/useUser";
import { addCreatedRequest, getListUsers } from "firebase/client";
import SelectList from "components/selectList";
import OptionServices from "components/optionServices";

export default function CreatedRequest() {
  const [listUsers, setListUsers] = useState([]);
  const [number, setNumber] = useState();
  const user = useUser();

  useEffect(() => {
    let unsuscribeListUsers;
    if (user) {
      unsuscribeListUsers = getListUsers(setListUsers);
    }
    return () => {
      unsuscribeListUsers && unsuscribeListUsers();
    };

    //user && fetchLatesRequest().then(setTimeLine);
  }, [user]);

  const handleCreatedService = (e) => {
    e.preventDefault();
    addCreatedRequest({
      userId: user.id,
      userName: user.username,
      avatar: user.avatar,
      description: "algun detalle mas por ver",
      servisId: [
        "tgny76n7gsdy77d",
        "gha7d7dhad8d7aysd7",
        "haudad78hndayd5r4avdhj",
      ],
      value: 120000,
      mileage: 1000,
      patinetaId: "gyg23yed7jjbhd3dd5jdf",
    });
  };

  const handleListUsers = (num) => {
    setNumber(num);
    document
      .querySelectorAll(".options-container")
      [num].classList.toggle("active");
  };

  const handleSelectUser = (n) => {
    var name = document.createTextNode(n);
    var pNew = document.createElement("p");
    var p = document.querySelectorAll(".pInit")[number];
    var select = document.querySelectorAll(".selected")[number];
    pNew.appendChild(name);
    select.replaceChild(pNew, p);
    pNew.classList.add("pInit");
    document
      .querySelectorAll(".options-container")[0]
      .classList.remove("active");
  };

  const usersArray = ["oscar casas", "danna casas", "bairon coronado"];
  const patinetaArray = ["Minca 350w", "Minca 500w"];
  const servicios = [
    "cambio de motor",
    "preventivo",
    "cambio de bateria",
    "cambio de llantas",
    "pintura",
  ];

  return (
    <>
      <section>
        <div className="divTitleModal">
          <h2 className="titleModal">Crear Servicio</h2>
        </div>
        <div className="sectionModal">
          <article className="articleModal">
            <form>
              <SelectList
                onClickOne={() => handleListUsers(0)}
                onClickTwo={handleSelectUser}
                title="Usuario"
                array={usersArray}
                principalName="Seleccione Un Usuario"
              />

              <OptionServices array={servicios} title="Servicios" />

              <article className="articleFormLeft">
                <textarea placeholder="Detalle" wrap="hard"></textarea>
              </article>
              <article className="articleFormButton">
                <button onClick={handleCreatedService}>Enviar Servicio</button>
              </article>
            </form>
          </article>
          <article className="articleModalImg">
            <SelectList
              onClickOne={() => handleListUsers(2)}
              onClickTwo={handleSelectUser}
              title="Patineta"
              array={patinetaArray}
              principalName="Seleccione Una Patineta"
            />
            <OptionServices array={servicios} title="Garantias" />
            <article className="articleMileage">
              <label>Ultimo kilometraje</label>
              <input type="number" id="mile" />
            </article>
          </article>
        </div>
      </section>
      <style jsx>{createdRequestStyle}</style>
    </>
  );
}
