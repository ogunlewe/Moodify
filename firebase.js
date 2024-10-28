// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi-UshYYIJNRJOcPeXJdR2_1hAdz8GNNY",
  authDomain: "moodify-a3631.firebaseapp.com",
  projectId: "moodify-a3631",
  storageBucket: "moodify-a3631.appspot.com",
  messagingSenderId: "1044981213787",
  appId: "1:1044981213787:web:b944391c4c50ab898a6d7e",
  measurementId: "G-FTNKG8HH7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);