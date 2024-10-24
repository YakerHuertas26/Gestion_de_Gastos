import { initializeApp } from "firebase/app";
// Base de datos
import { getFirestore } from "firebase/firestore";
// autentificación
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_APIKEY,
  authDomain:import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket:import.meta.env.VITE_APP_STORAGEBUCKET, 
  messagingSenderId:import.meta.env.VITE_APP_MESSAGINGSENDERID, 
  appId: import.meta.env.VITE_APP_APPID
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);
const dataBase= getFirestore(app);
const auth= getAuth(app);
export {dataBase,auth}

