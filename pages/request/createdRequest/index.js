import createdRequestStyle from "./style";
import { useRouter } from "next/router";
import { useState, useEffect, createElement } from "react";
import useUser from "hooks/useUser";
import { addCreatedServices, getListUsers } from "firebase/client";
import Navbar from "components/navbar";
import DownArrow from "components/Icons/downArrow";

export default function CreatedRequest() {
  const [listUsers, setListUsers] = useState([]);
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

  const handleCheck = (e) => {
    e.preventDefault();
    document
      .querySelectorAll("[type=checkbox]")
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

  const handleListUsers = (e) => {
    e.preventDefault();
    document.querySelector(".options-container").classList.toggle("active");
  };

  const handleSelectUser = (n) => {
    var name = document.createTextNode(n);
    var pNew = document.createElement("p");
    var p = document.querySelector(".pInit");
    var select = document.querySelector(".selected");
    console.log(typeof text);
    console.log(typeof name);
    pNew.appendChild(name);
    select.replaceChild(pNew, p);
    document.querySelector(".options-container").classList.remove("active");
  };

  return (
    <>
      <section>
        <div className="divTitleModal">
          <h2 className="titleModal">Crear Servicio</h2>
        </div>
        <div className="sectionModal">
          <article className="articleModal">
            <form>
              <article className="articleFormLeft">
                <h4>Usuario</h4>
                <div className="selected" onClick={handleListUsers}>
                  <p className="pInit">Seleccione Un Usuario</p>
                  <DownArrow
                    height={17}
                    width={17}
                    fill="#fff"
                    className="icon"
                  />
                </div>
                <div className="select-box">
                  <div className="options-container">
                    <div
                      className="option"
                      onClick={() => handleSelectUser("Oscar casas alfonso")}
                    >
                      <input type="radio" id="user1" className="radio" />
                      <label>Oscar casas alfonso</label>
                    </div>
                    <div className="option">
                      <input type="radio" id="user2" className="radio" />
                      <label>Olga maria alfonso</label>
                    </div>
                    <div className="option">
                      <input type="radio" id="user3" className="radio" />
                      <label>Danna valeria alfonso</label>
                    </div>
                    <div className="option">
                      <input type="radio" id="user3" className="radio" />
                      <label>Danna valeria alfonso</label>
                    </div>
                    <div className="option">
                      <input type="radio" id="user3" className="radio" />
                      <label>Danna valeria alfonso</label>
                    </div>
                    <div className="option">
                      <input type="radio" id="user3" className="radio" />
                      <label>Danna valeria alfonso</label>
                    </div>
                    <div className="option">
                      <input type="radio" id="user3" className="radio" />
                      <label>Danna valeria alfonso</label>
                    </div>
                    <div className="option">
                      <input type="radio" id="user3" className="radio" />
                      <label>Danna valeria alfonso</label>
                    </div>
                    <div className="option">
                      <input type="radio" id="user3" className="radio" />
                      <label>Danna valeria alfonso</label>
                    </div>
                  </div>
                </div>

                {/*<select>
                  {listUsers.map((users, index) => {
                    return <option key={index}>{users.name}</option>;
                  })}
                  <option>User 1</option>
                  <option>User 2</option>
                </select>*/}
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
                    <input type="checkbox" value="servicio 1" id="s1" />{" "}
                    Mantenimiento
                  </label>
                  <br />
                  <label for="s2">
                    <input type="checkbox" value="servicio 2" id="s2" /> Cambio
                    de frenos
                  </label>
                  <br />
                  <label for="s3">
                    <input type="checkbox" value="servicio 3" id="s3" /> Cambio
                    de bateria
                  </label>
                  <br />
                  <label for="s4">
                    <input type="checkbox" value="servicio 4" id="s4" /> Cambio
                    de motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="checkbox" value="servicio 4" id="s4" /> Cambio
                    de motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="checkbox" value="servicio 4" id="s4" /> Cambio
                    de motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="checkbox" value="servicio 4" id="s4" /> Cambio
                    de motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="checkbox" value="servicio 4" id="s4" /> Cambio
                    de motor
                  </label>
                  <br />
                  <label for="s4">
                    <input type="checkbox" value="servicio 4" id="s4" /> Cambio
                    de motor
                  </label>
                  <br />
                </div>
                <div className="divButtonServices">
                  <button onClick={handleCheck}>Borrar Seleccion</button>
                </div>
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
            <article className="articleMileage">
              <label>Ultimo kilometraje</label>
              <input type="text" id="mile" />
              <select>
                <option value="mts">mts</option>
                <option value="kts">kts</option>
              </select>
            </article>
            <div className="divImg">
              <img
                src="https://i.linio.com/p/d1444cdd74e52975d2260f7cb93b2d75-zoom.jpg"
                alt="Patineta Minca"
                height={350}
                width={350}
              />
            </div>
          </article>
        </div>
      </section>
      <style jsx>{createdRequestStyle}</style>
    </>
  );
}
