import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8sZS5MBiUzJHq9SSentrof2q28CN_PM0",
  authDomain: "clone-4402f.firebaseapp.com",
  projectId: "clone-4402f",
  storageBucket: "clone-4402f.appspot.com",
  messagingSenderId: "532655792014",
  appId: "1:532655792014:web:f7a6c7490afcf34f010edf",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, signInWithPopup, provider };
