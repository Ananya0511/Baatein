// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv6q7J3qdCreYjgQ4Eb_Y4Vn6zfWnZtdA",
  authDomain: "baatein-84b34.firebaseapp.com",
  projectId: "baatein-84b34",
  storageBucket: "baatein-84b34.appspot.com",
  messagingSenderId: "159538387581",
  appId: "1:159538387581:web:7351816d7049cb81852f14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);