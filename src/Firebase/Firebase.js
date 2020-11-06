import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
// import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNJg6BKVVOiywQRRIuYH6Vmi9Rdz-6mHU",
  authDomain: "evernote-clone-513ba.firebaseapp.com",
  databaseURL: "https://evernote-clone-513ba.firebaseio.com",
  projectId: "evernote-clone-513ba",
  storageBucket: "evernote-clone-513ba.appspot.com",
  messagingSenderId: "950019308522",
  appId: "1:950019308522:web:9dbeb8db5277953c875093",
  measurementId: "G-SSG5Q0J4PH",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// const auth = firebase.auth();
// const storage = firebase.storage();

export { db, timestamp };
