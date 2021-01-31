import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTxvOJqkbrAudCtlN-ffozImciXZhNmUA",
    authDomain: "https://thehardikchaturvedi.github.io/amazon-clone/",
    projectId: "clone-93bf2",
    storageBucket: "clone-93bf2.appspot.com",
    messagingSenderId: "1030329283038",
    appId: "1:1030329283038:web:22e6bcb78055029f0b6d4f",
    measurementId: "G-X81ZCWLBKK"
  })

const db = firebaseApp.firestore()
const auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }