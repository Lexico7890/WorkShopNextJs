import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyALYafzH2nOtWgU1AxJ88cO80YLH5cXvdE",
  authDomain: "work-shop-nextjs.firebaseapp.com",
  databaseURL: "https://work-shop-nextjs.firebaseio.com",
  projectId: "work-shop-nextjs",
  storageBucket: "work-shop-nextjs.appspot.com",
  messagingSenderId: "13960620645",
  appId: "1:13960620645:web:e75a97600726420fc5b48c",
  measurementId: "G-BDFVBMNQH7",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const mapUserFromFirebase = (user) => {
  const { displayName, photoURL, email, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email: email,
    id: uid,
  };
};

export const onAuthstateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebase(user) : null;
    onChange(normalizedUser);
    console.log(normalizedUser);
    console.log(user);
    db.collection("ListUsers")
      .doc(normalizedUser.id)
      .set({
        name: normalizedUser.username,
        email: normalizedUser.email,
        signInAt: firebase.firestore.Timestamp.fromDate(new Date()),
      });
  });
};

export const getListUsers = (callback) => {
  return db
    .collection("ListUsers")
    .orderBy("name", "desc")
    .onSnapshot(({ docs }) => {
      const users = docs.map(mapListUsersFromFirebaseToListObject);
      callback(users);
    });
};

export const mapListUsersFromFirebaseToListObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  return {
    ...data,
    id,
  };
};

export const loginWithGmail = () => {
  const gmailProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(gmailProvider);
};

export const addCreatedServices = ({
  userId,
  description,
  servisId,
  value,
  img,
}) => {
  return db.collection("createdServices").add({
    userId,
    description,
    servisId,
    value,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    img,
  });
};

const mapRequestFromFirebaseToRequestObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

export const listenLatesCreatedServices = (callback) => {
  return (
    db
      .collection("createdServices")
      .orderBy("createdAt", "desc")
      //.limit(5)
      .onSnapshot(({ docs }) => {
        const newCreatedServices = docs.map(
          mapRequestFromFirebaseToRequestObject
        );
        callback(newCreatedServices);
      })
  );
};

/*export const fetchLatesRequest = () => {
  return db
    .collection("request")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map(mapRequestFromFirebaseToRequestObject);
    });
};*/

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`/images/${file.name}`);
  const task = ref.put(file);
  return task;
};
