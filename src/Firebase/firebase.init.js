import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC-2Sh45ggquUjg_japkpmaxmaGSaQTU-4",
  authDomain: "bookoro-app.firebaseapp.com",
  projectId: "bookoro-app",
  storageBucket: "bookoro-app.firebasestorage.app",
  messagingSenderId: "1019036230037",
  appId: "1:1019036230037:web:020aa10eccfb1ffb3d569c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);