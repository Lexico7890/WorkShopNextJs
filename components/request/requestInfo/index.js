import Avatar from "components/Avatar";

export default function RequestInfo({
  id,
  name,
  description,
  valueServis,
  avatar,
  userId,
  createdaAt,
  img,
}) {
  console.log(description);
  return (
    <>
      <article>
        <header>
          <p>{name}</p>
          <Avatar alt={name} src={avatar} />
          <p>{description}</p>
        </header>
      </article>
    </>
  );
}
