import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import FxProphetScreen from './screens/FxProphetScreen';

const firebaseConfig = {
    apiKey: "AIzaSyAof90DuP39Hm73wgtRuLtSIcSmjwCcH5E",
    authDomain: "news-fabfe.firebaseapp.com",
    projectId: "news-fabfe",
    storageBucket: "news-fabfe.appspot.com",
    messagingSenderId: "1092515768200",
    appId: "1:1092515768200:web:e970c3b07eeffc0c2fbc3d"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/news" element={<NewsScreen/>}/>
            <Route path="/fxprophet" element={<FxProphetScreen/>}/>
        </Routes>
    </BrowserRouter>, 
    rootElement
);

    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();