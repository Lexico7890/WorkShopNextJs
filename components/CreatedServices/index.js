import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";
import createdServicesStyle from "./style";

export default function CreatedServices({
  id,
  name,
  message,
  avatar,
  createdAt,
  img,
}) {
  const timeAgo = useTimeAgo(createdAt);
  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={name} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{name}</strong>
            <span> - </span>
            <p>{timeAgo}</p>
          </header>
          <p>{message}</p>
          {img && <img src={img} />}
        </section>
      </article>
      <style jsx>{createdServicesStyle}</style>
    </>
  );
}
