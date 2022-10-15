import {initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIEBLC9KhlFkbMZfz-RZbQR0jIiyVu5fk",
    authDomain: "react-course-a1856.firebaseapp.com",
    databaseURL: "https://react-course-a1856-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-course-a1856",
    storageBucket: "react-course-a1856.appspot.com",
    messagingSenderId: "611019854016",
    appId: "1:611019854016:web:d1c9d476d506ff8ed75d25"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();

export const db = firebase.database();