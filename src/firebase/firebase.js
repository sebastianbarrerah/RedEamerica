import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1mvr1DWsLf8KxQZLyqiRilqH9lbdsnWU",
  authDomain: "redeamerica-db.firebaseapp.com",
  projectId: "redeamerica-db",
  storageBucket: "redeamerica-db.appspot.com",
  messagingSenderId: "973140334205",
  appId: "1:973140334205:web:63ba89c766b6b2ec324314"
};

export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore(app);
