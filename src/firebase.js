import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBju06yKhYlouJGF9xbZ1za05BkMzx5hZw",
//   authDomain: "ultra-foundation.firebaseapp.com",
//   projectId: "ultra-foundation",
//   storageBucket: "ultra-foundation.appspot.com",
//   messagingSenderId: "905900119894",
//   appId: "1:905900119894:web:334a7377cb33ba689928f7",
// };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpQPV3WMW0Q3ZCwn06-HTKb76HR9FG6L4",
  authDomain: "ultra-foundation-d9c30.firebaseapp.com",
  projectId: "ultra-foundation-d9c30",
  storageBucket: "ultra-foundation-d9c30.appspot.com",
  messagingSenderId: "50789560377",
  appId: "1:50789560377:web:b65eccbb54a2aacf829de8",
  // measurementId: "G-QBFNPQQ7NJ"
};

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBQW01GHMKaY1ebmYsaYtf-b6Tc7iK_k98",
//   authDomain: "ultra-foundation-project-port.firebaseapp.com",
//   projectId: "ultra-foundation-project-port",
//   storageBucket: "ultra-foundation-project-port.appspot.com",
//   messagingSenderId: "732526414193",
//   appId: "1:732526414193:web:a20714f38be5a484470ed0"
// };

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider };
