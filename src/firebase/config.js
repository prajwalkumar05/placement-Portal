
import { initializeApp } from "firebase/app";
import { getFirestore,Timestamp } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYNChuisn67N1ipLru6Tk07kxHWLa698I",
  authDomain: "placement-portal-657d8.firebaseapp.com",
  projectId: "placement-portal-657d8",
  storageBucket: "placement-portal-657d8.appspot.com",
  messagingSenderId: "400548943278",
  appId: "1:400548943278:web:907b247242ed77eaa7643f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

const storage = getStorage(app)

const db = getFirestore()
export {db,auth,Timestamp,storage}