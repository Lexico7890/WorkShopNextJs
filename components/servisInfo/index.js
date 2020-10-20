export default function ServisInfo({ id, name, value, garantia, description }) {
  return (
    <>
      <article>
        <p>{name}</p>
        <p>{value}</p>
        <p>{garantia}</p>
        <p>{description}</p>
      </article>
    </>
  );
}
