import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTxvOJqkbrAudCtlN-ffozImciXZhNmUA",
  authDomain: "clone-93bf2.firebaseapp.com",
  projectId: "clone-93bf2",
  storageBucket: "clone-93bf2.appspot.com",
  messagingSenderId: "1030329283038",
  appId: "1:1030329283038:web:22e6bcb78055029f0b6d4f",
  measurementId: "G-X81ZCWLBKK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };