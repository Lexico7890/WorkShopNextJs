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
    db.collection("ListUsers")
      .doc(normalizedUser.id)
      .set({
        name: normalizedUser.username,
        email: normalizedUser.email,
        avatar: normalizedUser.avatar,
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

export const addCreatedRequest = ({
  userId,
  description,
  servisId,
  value,
  mileage,
  patinetaId,
  userName,
  avatar,
}) => {
  return db.collection("createdRequest").add({
    userId,
    description,
    servisId,
    value,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    mileage,
    patinetaId,
    userName,
    avatar,
  });
};

const mapRequestFromFirebaseToRequestObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;
  console.log(createdAt);
  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

export const listenLatesCreatedRequest = (callback) => {
  return (
    db
      .collection("createdRequest")
      .orderBy("createdAt", "desc")
      //.limit(5)
      .onSnapshot(({ docs }) => {
        const newCreatedRequest = docs.map(
          mapRequestFromFirebaseToRequestObject
        );
        callback(newCreatedRequest);
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

//firebase services-------------------------------------------------------->

const mapRequestFromFirebaseToServisObject = (doc) => {
  const data = doc.data();
  const id = doc.id;

  return {
    ...data,
    id,
  };
};

export const listenLatesCreatedServices = (callback) => {
  return (
    db
      .collection("createdServices")
      .orderBy("name", "desc")
      //.limit(5)
      .onSnapshot(({ docs }) => {
        const newCreatedServices = docs.map(
          mapRequestFromFirebaseToServisObject
        );
        callback(newCreatedServices);
      })
  );
};

export const addCreatedServices = ({ userId, name, value, garantia }) => {
  return db.collection("createdServices").add({
    userId,
    name,
    value,
    garantia,
  });
};

export const listenLatesCreatedScooter = (callback) => {
  return (
    db
      .collection("createdScooter")
      .orderBy("name", "desc")
      //.limit(5)
      .onSnapshot(({ docs }) => {
        const newCreatedScooter = docs.map(
          mapRequestFromFirebaseToServisObject
        );
        callback(newCreatedScooter);
      })
  );
};

export const listenLatesCreatedEmployes = (callback) => {
  return db
    .collection("createdEmployes")
    .orderBy("name")
    .onSnapshot(({ docs }) => {
      const newCreatedEmployes = docs.map(mapRequestFromFirebaseToServisObject);
      callback(newCreatedEmployes);
    });
};
