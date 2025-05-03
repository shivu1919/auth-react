import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx-qaf6NtSi6EWZ2RHXzz-RMPaZgs0fq0",
  authDomain: "auth-7e544.firebaseapp.com",
  projectId: "auth-7e544",
  storageBucket: "auth-7e544.firebasestorage.app",
  messagingSenderId: "324465757319",
  appId: "1:324465757319:web:7b744ab9f5ee9595503c22",
  measurementId: "G-W5GP3RFJLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;