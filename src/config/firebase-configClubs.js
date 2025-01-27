// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigC = {
  apiKey: "AIzaSyAtVWvkLIZXcS8gojfk7ioJk1cNvpAYSPk",
  authDomain: "nogometna-liga-26aef.firebaseapp.com",
  databaseURL: "https://nogometna-liga-26aef-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nogometna-liga-26aef",
  storageBucket: "nogometna-liga-26aef.firebasestorage.app",
  messagingSenderId: "921755184575",
  appId: "1:921755184575:web:70288d0f086c3dd2e9050a",
  measurementId: "G-NXZHBGXB8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfigC);
const analytics = getAnalytics(app);