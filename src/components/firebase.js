import firebase from 'firebase'
import "firebase/auth";
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyA0pZ4PNTxnY7CFTmBZBUt3knW-i9lVQ_A",
    authDomain: "roomy-dev-d5d0e.firebaseapp.com",
    databaseURL: "https://roomy-dev-d5d0e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "roomy-dev-d5d0e",
    storageBucket: "roomy-dev-d5d0e.appspot.com",
    messagingSenderId: "528608578267",
    appId: "1:528608578267:web:4f717ec027f870b9639afe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;