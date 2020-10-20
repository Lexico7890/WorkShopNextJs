import SelectListStyle from "./style";
import DownArrow from "components/Icons/downArrow";

export default function SelectList({
  onClickOne,
  onClickTwo,
  title,
  array,
  principalName,
}) {
  return (
    <>
      <article className="articleFormLeft">
        <h4>{title}</h4>
        <div className="selected" onClick={onClickOne}>
          <p className="pInit">{principalName}</p>
          <DownArrow height={17} width={17} fill="#fff" className="icon" />
        </div>
        <div className="select-box">
          <div className="options-container">
            {array.map((data, index) => {
              return (
                <div
                  className="option"
                  onClick={() => onClickTwo(data)}
                  key={index}
                >
                  <input type="radio" id="user1" className="radio" />
                  <label>{data}</label>
                </div>
              );
            })}
          </div>
        </div>
      </article>

      <style jsx>{SelectListStyle}</style>
    </>
  );
}
{
  /*<select>
                  {listUsers.map((users, index) => {
                    return <option key={index}>{users.name}</option>;
                  })}
                  <option>User 1</option>
                  <option>User 2</option>
                </select>*/
}
