import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFL165QHMMXQK8NUNp-jSUOHIeIWmVniU",
  authDomain: "abcd-735c7.firebaseapp.com",
  projectId: "abcd-735c7",
  storageBucket: "abcd-735c7.appspot.com",
  messagingSenderId: "76844657206",
  appId: "1:76844657206:web:debbdb88ab4642c063c697"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()