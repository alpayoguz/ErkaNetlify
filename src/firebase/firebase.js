// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbX-pTNjQS-VMK_pT718u9Wg4GPYMg8VE",
  authDomain: "scaerka.firebaseapp.com",
  projectId: "scaerka",
  storageBucket: "scaerka.appspot.com",
  messagingSenderId: "453613360508",
  appId: "1:453613360508:web:2cc22d1642f7ce2f3900f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
