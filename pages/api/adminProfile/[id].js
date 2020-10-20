import { firestore } from "firebase/admin";

export default (request, response) => {
  const { query } = request;
  const { id } = query;

  firestore
    .collection("ListUsers")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      response
        .json({
          ...data,
          id,
        })
        .catch(() => {
          response.status(404).end();
        });
    });
};
