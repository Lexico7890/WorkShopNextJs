import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";
import createdServicesStyle from "./style";

export default function CreatedRequest({
  id,
  key,
  userName,
  description,
  createdAt,
  avatar,
  value,
}) {
  const timeAgo = useTimeAgo(createdAt);
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
          {description && <p>{description}</p>}
        </div>
      </article>
      <style jsx>{createdServicesStyle}</style>
    </>
  );
}
