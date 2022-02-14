// Import the functions you need from the SDKs you need
import firebase from "firebase";
require("@firebase/firestore")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHwrVS3LuL8Ajs30N1zZMcCfbLaPFHcRY",
  authDomain: "library-116f4.firebaseapp.com",
  databaseURL: "https://library-116f4-default-rtdb.firebaseio.com",
  projectId: "library-116f4",
  storageBucket: "library-116f4.appspot.com",
  messagingSenderId: "326821915231",
  appId: "1:326821915231:web:fbe9f113f4513d36bb49ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


