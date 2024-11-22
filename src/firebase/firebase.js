import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5J2SgkOmHen_nM5LT3HdWSYr4KCUQm7Y",
  authDomain: "herseyburada-e78e1.firebaseapp.com",
  projectId: "herseyburada-e78e1",
  storageBucket: "herseyburada-e78e1.appspot.com",
  messagingSenderId: "993863901564",
  appId: "1:993863901564:web:0fe10fe4463dadd57944f9",
  measurementId: "G-ELLMDMTP2Y",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
