import Avatar from "components/Avatar";


export default function Request({ id, name, message, avatar }) {
  return (
    <>
      <article key={id}>
          <div>
          <Avatar alt={name} src={avatar} />
          </div>
        <section>
          <strong>
            {name}
            <p>{message}</p>
          </strong>
        </section>
      </article>
      <style jsx>{`
      article{
            display: flex;
            padding: 10px 15px;
            border-bottom: 2px solid #eaf7ff;
        }

        div{
            padding-right: 10px;
        }
        p{
            margin: 0;
        }
          `}</style>
    </>
  );
}
