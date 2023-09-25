import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOTn887F9z1DVehPsHq47JbV9fFbZKPKE",
  authDomain: "sampleapp-ae64d.firebaseapp.com",
  projectId: "sampleapp-ae64d",
  storageBucket: "sampleapp-ae64d.appspot.com",
  messagingSenderId: "791642158355",
  appId: "1:791642158355:web:8cbfe2b10b03cd9aedd6e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
