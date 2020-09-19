import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";

export default function Request({ id, name, message, avatar, createdAt }) {
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
            <date>{timeAgo}</date>
          </header>

          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #eee;
        }

        div {
          padding-right: 10px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </>
  );
}
