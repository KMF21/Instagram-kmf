// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR6a0MF3uybUb6r_QTNfD_rsWUPBZ6ejw",
  authDomain: "instagram-kmf.firebaseapp.com",
  projectId: "instagram-kmf",
  storageBucket: "instagram-kmf.appspot.com",
  messagingSenderId: "347934257734",
  appId: "1:347934257734:web:064073e578978f6ac81047"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };