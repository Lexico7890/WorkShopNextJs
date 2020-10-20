import CreatedServicesStyle from "./style";

export default function CreatedServices({ id, name, value, garantia }) {
  return (
    <>
      <article key={id}>
        <p>{name}</p>
        <p>${value}</p>
        <p>{garantia}</p>
      </article>
      <style jsx>{CreatedServicesStyle}</style>
    </>
  );
}
