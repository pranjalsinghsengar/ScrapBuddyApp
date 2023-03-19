// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKK00r2DxaT9cRNzG0gfKcTIKnEYU3MrA",
  authDomain: "scrapbuddyapi.firebaseapp.com",
  projectId: "scrapbuddyapi",
  storageBucket: "scrapbuddyapi.appspot.com",
  messagingSenderId: "879855874094",
  appId: "1:879855874094:web:4ba8f9d8d7b2b067036fbf",
  measurementId: "G-RMQ3G6M091",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
