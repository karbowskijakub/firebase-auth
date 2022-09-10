// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcs6c9eLxXk7Ikp5jcSC4mUB3gUxucu88",
  authDomain: "fir-auth-42e75.firebaseapp.com",
  projectId: "fir-auth-42e75",
  storageBucket: "fir-auth-42e75.appspot.com",
  messagingSenderId: "151572092918",
  appId: "1:151572092918:web:b45d8788a3677353fed9d7",
  measurementId: "G-TQ08B8X72D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




