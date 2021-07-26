import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlWHrv89wTPFKbQVa7P4jIW1ewcY8GBrc",
  authDomain: "motoease-11396.firebaseapp.com",
  databaseURL: "https://motoease-11396-default-rtdb.firebaseio.com",
  projectId: "motoease-11396",
  storageBucket: "motoease-11396.appspot.com",
  messagingSenderId: "391568877127",
  appId: "1:391568877127:web:1186164f0306e4dd1df362",
  measurementId: "G-TCJL1PL4DK",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export default db;
