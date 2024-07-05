// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAurl_Km0A3Zkf97w6b0-ENTvQpJW1L_Ss",
//   authDomain: "galleryapp-c9e36.firebaseapp.com",
//   projectId: "galleryapp-c9e36",
//   storageBucket: "galleryapp-c9e36.appspot.com",
//   messagingSenderId: "1072006940811",
//   appId: "1:1072006940811:web:6f342b6377581f1eec2c8e",
//   measurementId: "G-T4TPZCGGC3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app); 
// const storage = getStorage(app);   
// const db = getFirestore(app);
// export { auth, storage,db};

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzvSasT6xkh2c8QB-phrnoAuUI73xgpfo",
  authDomain: "gallerybuild-9fdef.firebaseapp.com",
  projectId: "gallerybuild-9fdef",
  storageBucket: "gallerybuild-9fdef.appspot.com",
  messagingSenderId: "119730535981",
  appId: "1:119730535981:web:683b7741a05e2ef50382a4",
  measurementId: "G-1MKN6KGZQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app); 
const storage = getStorage(app);   
const db = getFirestore(app);
export { auth, storage,db};
