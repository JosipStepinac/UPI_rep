
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA52bk_TTmF22hVkX7ancule1l3CUWB9Q8",
  authDomain: "nogometna-liga-auth.firebaseapp.com",
  projectId: "nogometna-liga-auth",
  storageBucket: "nogometna-liga-auth.firebasestorage.app",
  messagingSenderId: "240685071303",
  appId: "1:240685071303:web:a8ed998ba58764f7bff7e2",
  measurementId: "G-HPF74QN8MT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);