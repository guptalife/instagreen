import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
const firebaseApp =initializeApp({
    apiKey: "AIzaSyCocuZ2tMpva2zdP6Shz10B43uIvRQapSk",
    authDomain: "instagram-clone-ff403.firebaseapp.com",
    databaseURL: "https://instagram-clone-ff403-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-ff403",
    storageBucket: "instagram-clone-ff403.appspot.com",
    messagingSenderId: "216903611293",
    appId: "1:216903611293:web:7751e186d4e67e6df8f574",
    measurementId: "G-ESM39RELVT"
});
const db=getFirestore(firebaseApp);
const storage=getStorage(firebaseApp);
const auth=getAuth(firebaseApp);
export  {db,storage,auth};
