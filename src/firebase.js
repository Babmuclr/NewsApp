import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


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
