// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgRE0oBhpjtuBK8mRM2zIRxrQ363mUe5s",
    authDomain: "face-task.firebaseapp.com",
    projectId: "face-task",
    storageBucket: "face-task.appspot.com",
    messagingSenderId: "970389044949",
    appId: "1:970389044949:web:b56d2ce7b791d39ceb6c5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth);