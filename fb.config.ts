// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4-cAAaQSF8qa-FXPe2BC21bDibLVWVRA",
  authDomain: "sj-feedback-form.firebaseapp.com",
  projectId: "sj-feedback-form",
  storageBucket: "sj-feedback-form.appspot.com",
  messagingSenderId: "916661937758",
  appId: "1:916661937758:web:a224577addaf42f7cbb6cf",
  measurementId: "G-83YQCKBKGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;





// apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID