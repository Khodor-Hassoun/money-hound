// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ2z-cpVTKxDER2XQ_34grjK-1NSklmyA",
  authDomain: "money-hound-aa532.firebaseapp.com",
  projectId: "money-hound-aa532",
  storageBucket: "money-hound-aa532.appspot.com",
  messagingSenderId: "954399280110",
  appId: "1:954399280110:web:fc1960da5ccb214a369cff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
