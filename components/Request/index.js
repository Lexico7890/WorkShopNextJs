import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Request({ id, name, message, avatar, createdAt, img }) {
  const timeAgo = useTimeAgo(createdAt);
  const router = useRouter();
  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push(`/status/${id}`);
  };
  return (
    <>
      <article key={id} onClick={handleArticleClick}>
        <div>
          <Avatar alt={name} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{name}</strong>
            <span> - </span>
            <Link href={"/status/[id]"} as={`/status/${id}`}>
              <a>
                <date>{timeAgo}</date>
              </a>
            </Link>
          </header>
          <p>{message}</p>
          {img && <img src={img} />}
        </section>
      </article>
      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #eee;
        }

        article :hover {
          background: #f5f8fa;
          cursor: pointer;
        }

        img {
          border-radius: 10px;
          height: auto;
          width: 100%;
          margin-top: 10px;
        }

        div {
          padding-right: 10px;
        }
        p {
          margin: 0;
        }
        a {
          color: #555;
          font-size: 14px;
          text-decoration: none;
        }
        a :hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
