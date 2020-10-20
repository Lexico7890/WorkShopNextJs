import optionServicesStyle from "./style";
import { useEffect, useState } from "react";
import Check from "components/Icons/check";

export default function OptionServices({ array, title }) {
  const [arrayServices, setArrayServices] = useState([]);

  const handleCheck = (data) => {
    const countServices = arrayServices;
    if (countServices.includes(data)) {
      countServices.forEach((element, index) => {
        if (element === data) {
          if (element === data && index === 0) {
            countServices.splice(0, 1);
          }
          countServices.splice(index, index);
        }
      });
    } else countServices.push(data);
    setArrayServices([...countServices]);
  };
  return (
    <>
      <div>
        <h4>{title}</h4>
      </div>
      <article className="articleFormLeftRadio">
        <div className="select-box">
          <div className="options-container">
            {array.map((data, index) => {
              return (
                <div
                  className="option"
                  onClick={() => handleCheck(data)}
                  key={index}
                >
                  <input type="radio" id="user1" className="radio" />
                  <label>{data}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="divArrayServices">
          {arrayServices.length === 0 ? (
            <p className="hearSelectServices">Seleccione algun servicio</p>
          ) : (
            arrayServices.map((element, index) => {
              return (
                <>
                  <div className="divCheck">
                    <Check height={15} width={15} />
                    <p key={index}>{element}</p>
                  </div>
                </>
              );
            })
          )}
        </div>
      </article>
      <style jsx>{optionServicesStyle}</style>
    </>
  );
}
