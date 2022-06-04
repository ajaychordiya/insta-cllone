// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1DRn123QvVaW2oi1HbBXanytfSFc7eQA",
  authDomain: "insta-clone-bcbc3.firebaseapp.com",
  projectId: "insta-clone-bcbc3",
  storageBucket: "insta-clone-bcbc3.appspot.com",
  messagingSenderId: "250680919892",
  appId: "1:250680919892:web:f8b860f52f7a409a07aac1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
