import Logo from "components/logo";
import Head from "next/head";
import PageUserStyle from "./style";

export default function CreateUser() {
  return (
    <>
      <Head>
        <title>User Minca</title>
      </Head>
      <section className="sectionUser">
        <article>
          <header>
            <div>
              <h3>Usuarios Minca</h3>
            </div>
            <Logo height={30} width={30} />
          </header>
        </article>
      </section>
      <style jsx>{PageUserStyle}</style>
    </>
  );
}
