// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, set, ref, update } from 'firebase/database';
import { getFirestore } from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7xZ2bWR1AipLY7Ea8fa4OmvuNitjZzUg",
  authDomain: "fir-9-dojo-f723e.firebaseapp.com",
  projectId: "fir-9-dojo-f723e",
  storageBucket: "fir-9-dojo-f723e.appspot.com",
  messagingSenderId: "343834651424",
  appId: "1:343834651424:web:06e7b800061b2c5fdc8545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app)
export const db = getFirestore(app)