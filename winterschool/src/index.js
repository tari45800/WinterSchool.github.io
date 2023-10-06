import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDy-VMc2v5YHZvbpgR-49IeE8y7ZT0Ql0I",
  authDomain: "winterschool-664b9.firebaseapp.com",
  projectId: "winterschool-664b9",
  storageBucket: "winterschool-664b9.appspot.com",
  messagingSenderId: "510934432389",
  appId: "1:510934432389:web:ff1fe27c184b17ffdfc7ec",
  measurementId: "G-L8SL1TGWSV",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
