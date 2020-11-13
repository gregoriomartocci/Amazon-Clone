import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWQ8aKNPQitkydTPFU0O1ntVCu83EzAUs",
  authDomain: "clone-d49b3.firebaseapp.com",
  databaseURL: "https://clone-d49b3.firebaseio.com",
  projectId: "clone-d49b3",
  storageBucket: "clone-d49b3.appspot.com",
  messagingSenderId: "366508048050",
  appId: "1:366508048050:web:188f61340bf5fd1cf853ab",
  measurementId: "G-MGC5PE40LQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
