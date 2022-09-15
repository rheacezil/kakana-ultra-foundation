import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAghs96XUD1BeOeHOe6ERd0Roh2NUjFVIM",
    authDomain: "kakana-ultra-foundation.firebaseapp.com",
    projectId: "kakana-ultra-foundation",
    storageBucket: "kakana-ultra-foundation.appspot.com",
    messagingSenderId: "306911852184",
    appId: "1:306911852184:web:816acd64c0744cd7eb42ed"
  };
// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = getFirestore(firebaseapp)
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider } 