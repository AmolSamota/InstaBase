import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4Ex1TGa3dV3l-s0kqtxdF-7cmpQx3ZAA",
    authDomain: "gallery-clone.firebaseapp.com",
    databaseURL: "https://gallery-clone.firebaseio.com",
    projectId: "gallery-clone",
    storageBucket: "gallery-clone.appspot.com",
    messagingSenderId: "371186930222",
    appId: "1:371186930222:web:b73e9fe09e98b4579645bf"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };
  