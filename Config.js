import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const storage = getStorage(app);
export const db = getFirestore(app);

// export {db,storage};