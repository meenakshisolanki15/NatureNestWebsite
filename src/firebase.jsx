// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB6iWDp-Cs-iC0QV8PhNRYuUn7sqkbDNmY",
  authDomain: "naturenestclient.firebaseapp.com",
  projectId: "naturenestclient",
  storageBucket: "naturenestclient.firebasestorage.app",
  messagingSenderId: "51965373358",
  appId: "1:51965373358:web:d930945f418edaca5bf63f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};
