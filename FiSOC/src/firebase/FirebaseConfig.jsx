// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8qDtcw9U6mNl239ylnD1vjZRGJx3TdG8",
  authDomain: "fisoc-93d84.firebaseapp.com",
  projectId: "fisoc-93d84",
  storageBucket: "fisoc-93d84.appspot.com",
  messagingSenderId: "551476230851",
  appId: "1:551476230851:web:22de361093377ff1028076",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const storage = getStorage(app);

export { fireDb, storage };
