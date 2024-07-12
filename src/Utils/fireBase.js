// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPSTeWo_Y2JNhjIUNbc7FkFFLJ8KEqGGc",
  authDomain: "netflixgpt-33a80.firebaseapp.com",
  projectId: "netflixgpt-33a80",
  storageBucket: "netflixgpt-33a80.appspot.com",
  messagingSenderId: "862101967047",
  appId: "1:862101967047:web:268619466e74bf72b2eee2",
  measurementId: "G-C1W497NSWN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
