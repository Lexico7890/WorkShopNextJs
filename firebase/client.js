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
  });
};

export const loginWithGmail = () => {
  const gmailProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(gmailProvider);
};

export const addRequest = ({ avatar, content, userId, userName, img }) => {
  return db.collection("request").add({
    avatar,
    content,
    userId,
    userName,
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

export const listenLatesRequest = (callback) => {
  return (
    db
      .collection("request")
      .orderBy("createdAt", "desc")
      //.limit(5)
      .onSnapshot(({ docs }) => {
        const newRequests = docs.map(mapRequestFromFirebaseToRequestObject);
        callback(newRequests);
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
