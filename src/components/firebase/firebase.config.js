// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0e8v5trrtgF0yYdR95zyBU0RoR0GLF0Q",
  authDomain: "ema-jon-firebse-project.firebaseapp.com",
  projectId: "ema-jon-firebse-project",
  storageBucket: "ema-jon-firebse-project.appspot.com",
  messagingSenderId: "437917278156",
  appId: "1:437917278156:web:20c64ce184ab4b29588769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;