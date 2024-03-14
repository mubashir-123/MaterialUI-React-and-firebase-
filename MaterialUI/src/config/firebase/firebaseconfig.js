import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzIphxECPnaedV09Ijg8nDz2Sc55q4Jck",
  authDomain: "materialui-react.firebaseapp.com",
  projectId: "materialui-react",
  storageBucket: "materialui-react.appspot.com",
  messagingSenderId: "335311899514",
  appId: "1:335311899514:web:16d6f28e8e0373c76da4c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);