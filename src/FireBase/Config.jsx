import { initializeApp } from "firebase/app";
// Base de datos
import { getFirestore } from "firebase/firestore";
// autentificación
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnMQfEOv5kdcyiktbt_PJf2wskLRQLpPY",
  authDomain: "app-gestion-de-gastos-43794.firebaseapp.com",
  projectId: "app-gestion-de-gastos-43794",
  storageBucket: "app-gestion-de-gastos-43794.appspot.com",
  messagingSenderId: "922036881600",
  appId: "1:922036881600:web:6b57f2961d536d4afa4525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);