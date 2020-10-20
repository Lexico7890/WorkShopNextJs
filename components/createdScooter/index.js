import CreatedScooterStyle from "components/createdServices/style";

export default function CreatedScooter({ id, name, power }) {
  return (
    <>
      <article key={id}>
        <p>{name}</p>
        <p>{power} W</p>
      </article>
      <style jsx>{CreatedScooterStyle}</style>
    </>
  );
}
