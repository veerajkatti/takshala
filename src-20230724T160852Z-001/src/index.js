import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8m_2lG7UR36_15wM_rR1xaEgdSfVBPFw",
  authDomain: "my-chatroom-d96bc.firebaseapp.com",
  databaseURL: "https://my-chatroom-d96bc-default-rtdb.firebaseio.com",
  projectId: "my-chatroom-d96bc",
  storageBucket: "my-chatroom-d96bc.appspot.com",
  messagingSenderId: "91325409614",
  appId: "1:91325409614:web:31956ba18c5cf098ea961f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

