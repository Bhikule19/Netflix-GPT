// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHcNs7PiK26yDtgJw_Dr-5sEF1gJ_W0IQ",
  authDomain: "netflixgpt-a7e89.firebaseapp.com",
  projectId: "netflixgpt-a7e89",
  storageBucket: "netflixgpt-a7e89.appspot.com",
  messagingSenderId: "420201241716",
  appId: "1:420201241716:web:b2f9f209aa22aa25ec0521",
  measurementId: "G-4TJXYHHCJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
