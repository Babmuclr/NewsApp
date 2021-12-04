import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

import HomeScreen from './screens/HomeScreen';
import titleImg from './assets/news.png';

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

function App() {
  return (
    <div>
        <header id="header">
            <div id="headerWrap">
                <h1><img src={titleImg} width="150" height="80" alt="logo" /></h1>
                <nav id="mainnav">
                    <div class="panel">
                        <ul>
                            <li><a href="#sec01">最新記事</a></li>
                            <li><a href="#sec02">決算</a></li>
                            <li><a href="#sec03">有名銘柄</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    <body>
        <section id="sec01">
            <header>
                <h2><span>最新記事</span></h2>
            </header>
            <div class="inner">
                <HomeScreen mode="importants"/>
            </div>
        </section>
        <section id="sec02">
            <header>
                <h2><span>決算</span></h2>
            </header>
            <div class="inner">
                <HomeScreen mode="earnings"/>
            </div>
        </section>
        <section id="sec03">
            <header>
                <h2><span>有名銘柄</span></h2>
            </header>
            <div class="inner">
                <HomeScreen mode="stocks"/>
            </div>
        </section>
    </body>    
    </div>
  );
}

export default App;
