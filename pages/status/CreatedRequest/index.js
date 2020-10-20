import RequestInfo from "components/request/requestInfo";
import { firestore } from "firebase/admin";
import { useRouter } from "next/router";

export default function RequestPage(props) {
  console.log(props);
  return (
    <RequestInfo
      id={props.id}
      name={props.name}
      description={props.description}
      avatar={props.avatar}
      userId={props.userId}
      createdAt={props.createdAt}
      img={props.img}
      value={props.value}
    />
  );
}
/*
 
*/

/*export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "9qSPOAybnEiLos1I6iue" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params, res } = context;
  const { id } = params;

  return firestore
    .collection("createdRequest")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;
      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      };
      return { props };
    })
    .catch(() => {
      return { props: {} };
    });
}

/**
 * export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params;

  const apiResponse = await fetch(`http://localhost:3000/api/request/${id}`);
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return { props };
  }
  if (res) {
    res.writeHead(301, { Location: "/Home" }).end();
  }
}
 * 
 */
