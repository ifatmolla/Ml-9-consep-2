// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcNn3meMfzDx86J98XJYSvxZid9TGZuLY",
  authDomain: "second-consept-firebase.firebaseapp.com",
  projectId: "second-consept-firebase",
  storageBucket: "second-consept-firebase.firebasestorage.app",
  messagingSenderId: "742087570378",
  appId: "1:742087570378:web:8cf53b3d27295b25661533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;