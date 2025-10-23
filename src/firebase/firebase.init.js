// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB07i4wgmUGylae_HCgbgPuNb9GzZBQuck",
  authDomain: "game-hub-acbff.firebaseapp.com",
  projectId: "game-hub-acbff",
  storageBucket: "game-hub-acbff.firebasestorage.app",
  messagingSenderId: "946614808565",
  appId: "1:946614808565:web:9c1598ba0330bb943bbabc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);