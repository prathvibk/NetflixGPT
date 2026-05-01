// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGmN8KxL_I9uYcMvQMMcBZsK-qTno-AZY",
  authDomain: "netflixgpt-77077.firebaseapp.com",
  projectId: "netflixgpt-77077",
  storageBucket: "netflixgpt-77077.firebasestorage.app",
  messagingSenderId: "680069352014",
  appId: "1:680069352014:web:759d20fc1ab3b4c687911f",
  measurementId: "G-79SG43RYS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;