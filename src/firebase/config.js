// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpXHlyk9VZYiclj1cEY9IItD_qkn_fF6w",
  authDomain: "silkshop-9149e.firebaseapp.com",
  projectId: "silkshop-9149e",
  storageBucket: "silkshop-9149e.appspot.com",
  messagingSenderId: "31122559438",
  appId: "1:31122559438:web:e59f302b9d1251891c1b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)