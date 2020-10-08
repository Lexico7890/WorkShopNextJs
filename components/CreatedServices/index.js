import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";
import createdServicesStyle from "./style";

export default function CreatedServices({
  id,
  key,
  userName,
  message,
  createdAt,
  avatar,
  value,
}) {
  const timeAgo = useTimeAgo(createdAt);
  console.log({
    id,
    key,
    userName,
    message,
    createdAt,
    avatar,
    value,
  });
  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <div>
          <header>
            <strong>{userName}</strong>
            <span> - </span>
            <p>{timeAgo}</p>
          </header>
          <p>{value}</p>
          {message && <p>{message}</p>}
        </div>
      </article>
      <style jsx>{createdServicesStyle}</style>
    </>
  );
}
