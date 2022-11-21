// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA537GAIRoJbIaMibJW3Eb7Oo_DFv-IfZ4",
  authDomain: "telekung-1bf83.firebaseapp.com",
  projectId: "telekung-1bf83",
  storageBucket: "telekung-1bf83.appspot.com",
  messagingSenderId: "731202700742",
  appId: "1:731202700742:web:618b2b2b35807e61e55ec7",
  measurementId: "G-01Z43Q53E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);