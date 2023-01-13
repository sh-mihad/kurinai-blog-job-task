// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI4pnDsXSJxJkCHdJNnu02mNm5BOwfZuE",
  authDomain: "kurinai-2c27f.firebaseapp.com",
  projectId: "kurinai-2c27f",
  storageBucket: "kurinai-2c27f.appspot.com",
  messagingSenderId: "935840714750",
  appId: "1:935840714750:web:d68862b534231efb97baaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app