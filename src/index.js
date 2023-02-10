import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/css/index.css";
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQKcA8bXCmFD8FqIk7uIb0N-PtkxqyBPM",
  authDomain: "mi-primer-tienda.firebaseapp.com",
  projectId: "mi-primer-tienda",
  storageBucket: "mi-primer-tienda.appspot.com",
  messagingSenderId: "85054936544",
  appId: "1:85054936544:web:3d3e66507c1c6db5ba8785",
  measurementId: "G-W22W7J32LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* React.StrictMode */}
    <App />
    {/* React.StrictMode */}
  </>
);

reportWebVitals();