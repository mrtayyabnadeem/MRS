// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAynEYMBzkQSYOvR4RX218K3qdMDjANu70",
  authDomain: "mr-system-9eded.firebaseapp.com",
  databaseURL:
    "https://mr-system-9eded-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mr-system-9eded",
  storageBucket: "mr-system-9eded.appspot.com",
  messagingSenderId: "315724714491",
  appId: "1:315724714491:web:5a37b0c43468979f203b5e",
  measurementId: "G-S784YG5BGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
