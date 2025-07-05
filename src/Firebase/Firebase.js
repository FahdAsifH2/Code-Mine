// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkxUmwS4sELtEdpIEgs_XQ0uLbfOXJ8tQ",
  authDomain: "notes-7a3c7.firebaseapp.com",
  projectId: "notes-7a3c7",
  storageBucket: "notes-7a3c7.firebasestorage.app",
  messagingSenderId: "820515134016",
  appId: "1:820515134016:web:19b12fe11978aa20dd9da5",
  measurementId: "G-G7JLY9YXXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app)


export {app,auth,analytics}