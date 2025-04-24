import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 const firebaseConfig = {
  apiKey: "AIzaSyAPdT3aamqUF7gbkm9ZZ7k-1YA9OQP92NQ",
  authDomain: "hcidemo-b55eb.firebaseapp.com",
  projectId: "hcidemo-b55eb",
  storageBucket: "hcidemo-b55eb.firebasestorage.app",
  messagingSenderId: "938890435241",
  appId: "1:938890435241:web:7e8475e79999a315ff67b8",
  measurementId: "G-4S0V1PVC8Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
