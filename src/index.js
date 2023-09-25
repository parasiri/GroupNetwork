import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyCOTn887F9z1DVehPsHq47JbV9fFbZKPKE",
  authDomain: "sampleapp-ae64d.firebaseapp.com",
  projectId: "sampleapp-ae64d",
  storageBucket: "sampleapp-ae64d.appspot.com",
  messagingSenderId: "791642158355",
  appId: "1:791642158355:web:8cbfe2b10b03cd9aedd6e6"
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
