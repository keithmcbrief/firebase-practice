// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT2rGWdLjuTjSRF4t4FzYWFcX9QxV2xcg",
  authDomain: "fir-practice-bb0b8.firebaseapp.com",
  projectId: "fir-practice-bb0b8",
  storageBucket: "fir-practice-bb0b8.appspot.com",
  messagingSenderId: "321878465105",
  appId: "1:321878465105:web:93e2b23d6e521e149b7670",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
