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
import BlogScreen from './screens/BlogScreen';

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
            <Route path="/" element={<NewsScreen mode="0"/>}/>
            <Route path="/home/" element={<HomeScreen/>}/>
            <Route path="/fxprophet/" element={<FxProphetScreen/>}/>
            <Route path="/blog/" element={<BlogScreen/>}/>
            <Route path="/news/earnings/" element={<NewsScreen mode="1"/>}/>
            <Route path="/news/bloomberg/" element={<NewsScreen mode="2"/>}/>
            <Route path="/news/reuters/" element={<NewsScreen mode="3"/>}/>
            <Route path="/news/cnbc/" element={<NewsScreen mode="4"/>}/>
            <Route path="/news/thestreet/" element={<NewsScreen mode="5"/>}/>
            <Route path="/news/foxbusiness/" element={<NewsScreen mode="6"/>}/>
            <Route path="/news/wsj/" element={<NewsScreen mode="7"/>}/>
            <Route path="/news/forbes/" element={<NewsScreen mode="8"/>}/>
            <Route path="/news/businessinsider/" element={<NewsScreen mode="9"/>}/>
            <Route path="/news/motleyfool/" element={<NewsScreen mode="10"/>}/>
        </Routes>
    </BrowserRouter>, 
    rootElement
);

    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();