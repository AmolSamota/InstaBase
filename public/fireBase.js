var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyC4Ex1TGa3dV3l-s0kqtxdF-7cmpQx3ZAA",
    authDomain: "gallery-clone.firebaseapp.com",
    databaseURL: "https://gallery-clone.firebaseio.com",
    projectId: "gallery-clone",
    storageBucket: "gallery-clone.appspot.com",
    messagingSenderId: "371186930222",
    appId: "1:371186930222:web:b73e9fe09e98b4579645bf"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}