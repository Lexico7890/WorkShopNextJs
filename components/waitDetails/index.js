import WaitSelect from "components/imgSelect/waitSelect";
import WaitDetailsStyle from "./style";

export default function WaitDetails(props) {
  return (
    <>
      <article className="artSelect">
        <div>
          <WaitSelect height={props.height} width={props.width} />
        </div>
        {props.subTitle === true && <p>Detalles</p>}
      </article>
      <style jsx>{WaitDetailsStyle}</style>
    </>
  );
}
