// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfwbYWBRF-K8TDQp0VYnd7_qhV8B2PhD8",
  authDomain: "academiccourses-e3d5c.firebaseapp.com",
  projectId: "academiccourses-e3d5c",
  storageBucket: "academiccourses-e3d5c.appspot.com",
  messagingSenderId: "937325111351",
  appId: "1:937325111351:web:e5f618a8a48f17234177b2",
  measurementId: "G-8W67X6NT10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
