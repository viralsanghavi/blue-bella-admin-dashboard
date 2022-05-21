import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBaAA6sQmtWilwzTUi2bwxxq_Pxs9A5z1w",
  authDomain: "blue-bella-resort.firebaseapp.com",
  projectId: "blue-bella-resort",
  storageBucket: "blue-bella-resort.appspot.com",
  messagingSenderId: "993790800871",
  appId: "1:993790800871:web:bc73899ae7fad8a5cc8342",
  measurementId: "G-Y8RKT981EC",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
