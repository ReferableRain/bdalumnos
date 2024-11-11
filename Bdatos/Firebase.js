import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyCrFq8R1iy4ImGaZ6mCvhSovZRev_ysCXw",
    authDomain: "dbpruebaalumnos.firebaseapp.com",
    databaseURL: "https://dbpruebaalumnos-default-rtdb.firebaseio.com",
    projectId: "dbpruebaalumnos",
    storageBucket: "dbpruebaalumnos.appspot.com",
    messagingSenderId: "779925715833",
    appId: "1:779925715833:web:63a1b2889dbe49ad70cda8",
    measurementId: "G-RL2L5FXJ01"
};

if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);  // Usa "config" en lugar de "FirebaseConfig"
}

export default firebase;
