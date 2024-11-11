import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const settings = {timestampsInSnapshots: true,merge:true};
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
firebase.initializeApp(config);
firebase.firestore().settings(settings);
const storage=firebase.storage;


export default conexion = firebase.firestore()
const auth = firebase.auth() 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    firebase,
    auth,
   googleAuthProvider,
   storage,
}