import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-78939.firebaseapp.com",
  projectId: "chat-78939",
  storageBucket: "chat-78939.appspot.com",
  messagingSenderId: "918801071310",
  appId: "1:918801071310:web:ee614fef083d54793ea49f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
