import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMlS5zDC7MZmkCiWLLhYqXI9mg7g5qtMQ",
  authDomain: "real-estate-e9c51.firebaseapp.com",
  projectId: "real-estate-e9c51",
  storageBucket: "real-estate-e9c51.appspot.com",
  messagingSenderId: "493741333828",
  appId: "1:493741333828:web:93302e52953554dee40b11",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore();
