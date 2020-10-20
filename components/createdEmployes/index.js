import CreatedEmployesStyle from "components/createdServices/style";

export default function CreatedEmployes({ id, name, specialty }) {
  return (
    <>
      <article key={id}>
        <p>{name}</p>
        <p>{specialty}</p>
      </article>
      <style jsx>{CreatedEmployesStyle}</style>
    </>
  );
}
