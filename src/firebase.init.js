// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwjVVkDuXPiLsGWUxf--PbeZJ4jcGvhe0",
  authDomain: "react-work-dir-common.firebaseapp.com",
  projectId: "react-work-dir-common",
  storageBucket: "react-work-dir-common.appspot.com",
  messagingSenderId: "479191220634",
  appId: "1:479191220634:web:68ff9ca6dc8b92d8e23a23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
