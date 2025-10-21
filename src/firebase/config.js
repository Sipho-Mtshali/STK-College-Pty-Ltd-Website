// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXnoAm-oeWjJXh53s1FIzDwieUGmENrn8",
  authDomain: "stkcollegewebsite.firebaseapp.com",
  projectId: "stkcollegewebsite",
  storageBucket: "stkcollegewebsite.firebasestorage.app",
  messagingSenderId: "380223302555",
  appId: "1:380223302555:web:488699e877bc9e8fcf0f3e",
  measurementId: "G-Q046V9TX39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;