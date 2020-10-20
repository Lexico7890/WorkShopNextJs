import ServisInfo from "components/servisInfo";
import { useRouter } from "next/router";

export default function CreatedServicesPage(props) {
  const router = useRouter();
  if (router.isFallback) return <h2>Cargando...</h2>;
  return (
    <ServisInfo
      id={props.id}
      name={props.name}
      value={props.value}
      garantia={props.garantia}
      description={props.description}
    />
  );
}

export async function getStaticPath() {
  return {
    paths: [{ params: { id: "BMsdzy2KQn1bezXwVsRs" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params, res } = context;
  const { id } = params;

  return firestore
    .collection("createdServices")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { garantia } = data;
      const props = {
        ...data,
        id,
        garantia: +garantia.toDate(),
      };
      return { props };
    })
    .catch(() => {
      return { props: {} };
    });
}
