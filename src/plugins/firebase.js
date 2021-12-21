// Import the functions you need from the SDKs you need
import {
  initializeApp
} from 'firebase/app';
import {
  getFirestore
} from "firebase/firestore";
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQjAfJ2CCTyMZqF4gCtygesrh5-WIvzrI",
  authDomain: "authefication-fea3f.firebaseapp.com",
  projectId: "authefication-fea3f",
  storageBucket: "authefication-fea3f.appspot.com",
  messagingSenderId: "657902739937",
  databaseURL: "https://authefication-fea3f.firebaseio.com",
  appId: "1:657902739937:web:637674b6d778910831b2a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
