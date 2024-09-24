import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkt5ftt6pTqutqnYVHuFNFcl0N_pWYCoU",
  authDomain: "coder-ecommerce-3a8f0.firebaseapp.com",
  projectId: "coder-ecommerce-3a8f0",
  storageBucket: "coder-ecommerce-3a8f0.appspot.com",
  messagingSenderId: "434396597687",
  appId: "1:434396597687:web:919ffc8a18a013dbd52c32"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
