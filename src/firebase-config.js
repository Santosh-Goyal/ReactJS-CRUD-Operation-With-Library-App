import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_dZN7XZlAtXhwiDsA4nOkfVuKtofMDW4",
  authDomain: "test-dos-b80e5.firebaseapp.com",
  projectId: "test-dos-b80e5",
  storageBucket: "test-dos-b80e5.appspot.com",
  messagingSenderId: "649118296602",
  appId: "1:649118296602:web:a7f98e542659bfca03bfa3",
  measurementId: "G-JH29CWXHLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);