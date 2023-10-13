import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD7HBeyINSuDzFcOHztpGqt-hKWkh3_l4Y",
  authDomain: "fake-store-d9375.firebaseapp.com",
  projectId: "fake-store-d9375",
  storageBucket: "fake-store-d9375.appspot.com",
  messagingSenderId: "306277577612",
  appId: "1:306277577612:web:9550354f3f32f4f09d5ca9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };