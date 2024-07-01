import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAurl_Km0A3Zkf97w6b0-ENTvQpJW1L_Ss",
  authDomain: "galleryapp-c9e36.firebaseapp.com",
  projectId: "galleryapp-c9e36",
  storageBucket: "galleryapp-c9e36.appspot.com",
  messagingSenderId: "1072006940811",
  appId: "1:1072006940811:web:6f342b6377581f1eec2c8e",
  measurementId: "G-T4TPZCGGC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);  
export { auth };