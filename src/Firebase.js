import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6GhkdrbMh6sKcTSv4WYheZqErrlV3o5E",
    authDomain: "hack-b609c.firebaseapp.com",
    databaseURL: "https://hack-b609c-default-rtdb.firebaseio.com",
    projectId: "hack-b609c",
    storageBucket: "hack-b609c.appspot.com",
    messagingSenderId: "961590374257",
    appId: "1:961590374257:web:699b2e8535d1e0e28490d0",
    measurementId: "G-X4MLB1V59X"
  };

  firebase.initializeApp(firebaseConfig);
  export const firestore = firebase.firestore();
  export default firebase;

