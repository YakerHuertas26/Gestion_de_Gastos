import { initializeApp } from "firebase/app";
// Base de datos
import { getFirestore } from "firebase/firestore";
// autentificación
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APP_VITE_APIKEY,
  authDomain:process.env.APP_VITE_AUTHDOMAIN,
  projectId: process.env.APP_VITE_PROJECTID,
  storageBucket:process.env.APP_VITE_STORAGEBUCKET, 
  messagingSenderId:process.env.APP_VITE_MESSAGINGSENDERID, 
  appId: process.env.APP_VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);