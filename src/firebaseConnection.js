import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyA26CvZnN7phaj7MP4uZ6U0zQ2w2zXUm9w",
    authDomain: "e-obras-fe770.firebaseapp.com",
    projectId: "e-obras-fe770",
    storageBucket: "e-obras-fe770.appspot.com",
    messagingSenderId: "877189959886",
    appId: "1:877189959886:web:c5cdc9ce6db59da1b9009f",
    measurementId: "G-40KYELC915"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;