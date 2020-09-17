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

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const mapUserFromFirebase = (user) => {
  const { displayName, photoURL, email } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email: email,
  };
};

export const onAuthstateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    const normalizedUser = user ? mapUserFromFirebase(user): null;
    onChange(normalizedUser);
  });
};

export const loginWithGmail = () => {
  const gmailProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(gmailProvider)
};
