// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA40TfrezTt6ra0zVXJqEP6Cbn0tFAqJg0",
  authDomain: "virtual-platform-6d572.firebaseapp.com",
  projectId: "virtual-platform-6d572",
  storageBucket: "virtual-platform-6d572.appspot.com",
  messagingSenderId: "71280084299",
  appId: "1:71280084299:web:8b5a47d87acec2c0a514ce",
  measurementId: "G-SKG3S1B7MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);