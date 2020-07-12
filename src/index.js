import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA-PPT_5RUuD8Qjd6nqsn8Huzu43WLA3uI",
  authDomain: "cart-82aa5.firebaseapp.com",
  databaseURL: "https://cart-82aa5.firebaseio.com",
  projectId: "cart-82aa5",
  storageBucket: "cart-82aa5.appspot.com",
  messagingSenderId: "284906211483",
  appId: "1:284906211483:web:40209afc851474fe829e3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


